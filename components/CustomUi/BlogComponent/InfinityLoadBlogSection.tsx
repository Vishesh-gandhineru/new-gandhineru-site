"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import BlogCard from "../BlogCard";
import { useInView } from "framer-motion";
import { Spinner } from "@/components/CustomIcons";
import axios from "axios";
import { GetAllPosts } from "@/ServerActions/FetchPost";

const InfinityLoadBlogSection = () => {
  const searchParams = useSearchParams();
  const categoryId: string | null = searchParams.get("category");
  const [Posts, setPosts] = useState<any[]>([]);
  const [PostLoading, setPostLoading] = useState(true);
  const [PostPage, setPostPage] = useState(1);
  const [maxPostPage, setMaxPostPage] = useState<number>(0);
  const [maxPostReached, setMaxPostReached] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const loadMorePosts = async () => {
    const nextpage = maxPostPage >= PostPage ? maxPostPage : PostPage + 1;
    const baseUrl = "https://cms.gandhineru.com/wp-json/wp/v2";
    const url = `${baseUrl}/posts`;
    const params = {
      _embed: true,
      _fields: "id,slug,title,meta,stick,_links,date,featured_media,categories",
      per_page: 4,
      page: nextpage,
    };

    try {
      const response = await axios.get(url, { params });
      const totalPosts: number = response.headers["x-wp-total"];
      const totalPages: number = response.headers["x-wp-totalpages"];
      setMaxPostPage(totalPages);
      if (totalPages == PostPage) {
        setMaxPostReached(true);
      }
      setTotalPosts(totalPosts);
      if (totalPosts > Posts.length && totalPages > PostPage) {
        setPostPage(nextpage);
        return setPosts((prev) => [...prev, ...response.data]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (isInView) {
      loadMorePosts();
    }
  }, [isInView]);

//   useEffect(() => {
   
//       const FilterPosts = async () => {
//         const getPosts = await GetAllPosts(
//           {
//             categories: categoryId == "0" ? undefined : categoryId,
//             per_page: totalPosts,
//           },
//           1
//         );
//         return setPosts([...getPosts]);
//       };
//   if (categoryId != "0" || categoryId != null) {
//       FilterPosts();
//   }
    
//   }, [categoryId]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 xl:w-[1190px] my-0 m-auto">
        {Posts?.map((post: Record<string, any> = {}) => {
          return (
            <BlogCard
              key={post.id}
              title={post.title.rendered}
              date={post.date}
              image={post._embedded["wp:featuredmedia"][0].source_url}
              readTime={post.meta["read-time"]}
              slug={post.slug}
            />
          );
        })}
      </div>
      {!maxPostReached && (
        <div className="w-full grid place-content-center mt-14" ref={ref}>
          <Spinner className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary" />
        </div>
      )}
    </div>
  );
};

export default InfinityLoadBlogSection;
