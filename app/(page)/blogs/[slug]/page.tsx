import React from "react";
import { GetAllPosts, GetPostBySlug } from "@/ServerActions/FetchPost";
import HeroBanner from "@/components/CustomUi/HeroBanner";
import DOMPurify from "isomorphic-dompurify";
import NewsLetterForm from "@/components/CustomUi/Footer/FooterNewsLetterForm";
import BlogCard from "@/components/CustomUi/BlogCard";

type BlogSinglePageProps = {
  params: {
    slug: string;
  };
};

const BlogSinglePage = async ({ params }: BlogSinglePageProps) => {
  const { slug } = params;
  const SinglePost = await GetPostBySlug(slug);
  const Posts = await GetAllPosts({
    _fields: "id,slug,title,meta,stick,_links,date,featured_media",
  });
  const post = SinglePost[0];

  const PostDate = new Date(post.date);
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const FormatedDate = `${PostDate.getDate()} ${
    Months[PostDate.getMonth()]
  } ${PostDate.getFullYear()}`;

  const PostContent = DOMPurify.sanitize(post.content.rendered);

  return (
    <section>
      <HeroBanner
        className=" bg-hero-blog-banner container"
        buttonText="Book a Clarity Call"
      ></HeroBanner>

      <div className="container my-[80px] flex flex-col gap-[50px] w-[80%]">
        <div className="flex flex-col gap-[20px] justify-start items-start">
          <h1 className="text-[36px] leading-[46px]">{post.title.rendered}</h1>
          <div className=" flex gap-[30px] items-center justify-start w-full h-full">
            <span className="border-[1px] border-[#D0D0D0] rounded-full px-5 py-2 text-primary text-sm uppercase">
              {post.meta["read-time"]} min read
            </span>
            <p className="text-[14px] uppercase text-gray">{FormatedDate}</p>
          </div>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: PostContent }}></div>
        </div>
      </div>
      <div className="container px-[100px] flex flex-col gap-[80px]">
        <div className="bg-[#F3F3F3] flex justify-between items-center py-12 px-12 rounded-[20px]">
          <h3 className="w-[200px]">Get the latest news in your inbox!</h3>
          <NewsLetterForm className="flex justify-end items-end gap-4 space-y-0" />
        </div>
        <div className="flex flex-col gap-[40px]">
          <h3>Recommended Resources/ Reads</h3>

          <div className="grid grid-cols-4 gap-x-8 gap-y-10 w-[1190px] my-0 m-auto">
            {Posts.map((post: Record<string, any> = {}) => {
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
        </div>
      </div>
    </section>
  );
};

export default BlogSinglePage;
