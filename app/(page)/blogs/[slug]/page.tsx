import React from "react";
import { GetAllPosts, GetPostBySlug } from "@/ServerActions/FetchPost";
import HeroBanner from "@/components/CustomUi/HeroBanner";
import DOMPurify from "isomorphic-dompurify";
import NewsLetterForm from "@/components/CustomUi/Footer/FooterNewsLetterForm";
import BlogCard from "@/components/CustomUi/BlogCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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

      <div className=" my-[30px] md:container md:my-[50px] flex flex-col gap-[30px] md:gap-[50px] lg:w-[90%] xl:w-[80%]">
        <div className="flex flex-col gap-[20px] justify-start items-start">
          <h2 className="text-[24px] leading-[34px] md:text-[36px] md:leading-[46px]">{post.title.rendered}</h2>
          <div className=" flex gap-[30px] items-center justify-start w-full h-full">
            <span className="border-[1px] border-[#D0D0D0] rounded-full px-5 py-2 text-primary text-[12px] md:text-sm uppercase">
              {post.meta["read-time"]} min read
            </span>
            <p className="text-[12px] md:text-[14px] uppercase text-gray">{FormatedDate}</p>
          </div>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: PostContent }}></div>
        </div>
      </div>
      <div className="md:container flex flex-col gap-[40px] md:gap-[50px]">
        <div className="bg-[#F3F3F3] xl:w-[85%] m-auto flex flex-col md:gap-[30px] lg:flex-row justify-between items-center p-8 md:py-12 md:px-12 rounded-[20px]">
          <h3 className="lg:w-[500px]">Get the latest news in your inbox!</h3>
          <NewsLetterForm className="flex flex-col md:flex-row w-full justify-start md:justify-center xl:justify-end items-start lg:items-end gap-4 space-y-0" />
        </div>


          <div className="w-full lg:w-[1190px] my-0 m-auto flex flex-col gap-5">
          <h3>Recommended Resources/ Reads</h3>
          <Carousel>
  <CarouselContent>    
            {Posts.map((post: Record<string, any> = {}) => {
              return (
                <CarouselItem key={post.id} className=" basis-[80%] sm:basis-[40%] lg:basis-1/4">
                  <BlogCard                    
                    title={post.title.rendered}
                    date={post.date}
                    image={post._embedded["wp:featuredmedia"][0].source_url}
                    readTime={post.meta["read-time"]}
                    slug={post.slug}
                  />
                </CarouselItem>
              );
            })}
  </CarouselContent>
</Carousel>
          </div>

      </div>
    </section>
  );
};

export default BlogSinglePage;
