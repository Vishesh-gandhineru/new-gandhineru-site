
import React, {useState , useEffect} from "react";
import { GetAllPosts, GetAllPostsCategory } from "@/ServerActions/FetchPost";
import HeroBanner from "@/components/CustomUi/HeroBanner";
import he from "he";
import BlogCard from "@/components/CustomUi/BlogCard";
import { cn } from "@/lib/utils";
import BlogCategoryButton from "@/components/CustomUi/BlogComponent/BlogCategoryButton";
import BlogLoading from "@/components/CustomUi/BlogComponent/BlogLoading";
import Link from "next/link";
import LoadMoreBlogBtn from "@/components/CustomUi/BlogComponent/LoadMoreBlogBtn";



const ResourcesPage = async ({searchParams}: {searchParams: {category : number}}) => {
 
  const {category:categoryId} = searchParams;
  const Posts = await GetAllPosts({ per_page:4, categories: categoryId == 0 ? undefined : categoryId});
  const PostsCategory = await GetAllPostsCategory({_fields : 'id,name,slug,count'});


  return (
    <main>
      <HeroBanner
        buttonHref="/contact"
        className={cn(
          "md:container bg-right h-[360px] bg-cover md:bg-center bg-no-repeat",
          ["bg-hero-blog-banner"]
        )}
        buttonText="Book a Clarity Call"
      ></HeroBanner>
      <section className="sectionContainer">
      <div id='MainContent' className="lg:container my-[50px] lg:my-[80px] flex flex-col gap-[30px]">
        <div className='flex flex-col gap-[20px] justify-center items-center'>
        <h2 className='text-center lg:w-[80%] xl-[50%]'>Access global knowledge in design and development.</h2>
        <div className=' w-full flex overflow-x-scroll hideScroll justify-start md:justify-center items-center whitespace-nowrap gap-[20px]'>
         <Link href="/blogs?category=0" scroll={false} className={cn('text-[10px] md:text-base border-[1px] rounded-full w-fit h-fit py-2 px-7', [
            categoryId == 0  ? "bg-primary text-white" : "bg-white text-primary",
         ])}>All</Link>
          {PostsCategory.map((category : Record<string , any> = {} , index:number)=>{
            return (
             <BlogCategoryButton i={index} key={category.id} category={category} />
            )
          })}
        </div>
        </div>
       {Posts ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 xl:w-[1190px] my-0 m-auto'>
          {Posts.map((post : Record<string , any> = {})=>{
            return (
              <BlogCard key={post.id} title={post.title.rendered} date={post.date} image={post._embedded["wp:featuredmedia"][0].source_url} readTime={post.meta["read-time"]} slug={post.slug} />
            )
          })}
        </div> : <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 md:w-[1190px] my-0 m-auto'>
          <BlogLoading /></div>}
      </div>
      <LoadMoreBlogBtn />
      </section>
    </main>
  );
};

export default ResourcesPage;
