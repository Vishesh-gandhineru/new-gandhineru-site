"use client";

import React, { useEffect, useRef, useState } from "react";
import BlogCard from "../BlogCard";
import { useInView } from "framer-motion";
import { Spinner } from "@/components/CustomIcons";
import axios from "axios";

type InfinityLoadProps = {
  initialPost: any[];
  MaxPage: number;
};

const InfinityLoadBlogSection = ({
  initialPost,
  MaxPage,
}: InfinityLoadProps) => {
  const [Posts, setPosts] = useState<any[]>(initialPost);
  const [PostPage, setPostPage] = useState(1);
  const [maxPostPage, setMaxPostPage] = useState<number>(MaxPage);
  const [maxPostReached, setMaxPostReached] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  async function loadMorePosts() {
    const nextpage = maxPostPage <= PostPage ? maxPostPage : PostPage + 1;
    // const newPosts = await fetchPostFromWordpress('posts', { _embed: true ,_fields: "id,slug,title,meta,stick,_links,date,featured_media",per_page:4 ,page:nextpage});
    const params = {
      _embed: true,
      _fields: "id,slug,title,meta,stick,_links,date,featured_media",
      per_page: 4,
      page: nextpage,
    };
    const baseUrl = `https://cms.gandhineru.com/wp-json/wp/v2`; // Replace with your actual REST API URL
    setPostPage(nextpage);
    const url = `${baseUrl}/posts`;
    try {
      const response = await axios.get(url, { params });
      return setPosts((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Or handle the error differently (e.g., return a default value)
    }
  }

  useEffect(() => {
    if (isInView) {
      loadMorePosts();
    }
    if (maxPostPage <= PostPage) {
      setMaxPostReached(true);
    }
  }, [isInView]);

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
