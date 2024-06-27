import React from 'react'
import {GetAllPosts , GetAllPostsCategory} from '@/ServerActions/FetchPost'
import HeroBanner from '@/components/CustomUi/HeroBanner';
import he from 'he'
import BlogCard from '@/components/CustomUi/BlogCard';
import { cn } from '@/lib/utils';



const ResourcesPage = async () => { 

  const Posts = await GetAllPosts({_fields : 'id,slug,title,meta,stick,_links,date,featured_media'});
  const PostsCategory = await GetAllPostsCategory({_fields : 'id,name,slug'});
  return (
    <section>
      <HeroBanner
        className={cn("md:container bg-right h-[360px] bg-cover md:bg-center bg-no-repeat", ["bg-hero-blog-banner"])}
        buttonText="Book a Clarity Call"
      ></HeroBanner>

      <div className="lg:container my-[50px] lg:my-[80px] flex flex-col gap-[30px]">
        <div className='flex flex-col gap-[20px] justify-center items-center'>
        <h2 className='text-center lg:w-[80%] xl-[50%]'>Access global knowledge in design and development.</h2>
        <div className=' w-full flex overflow-x-scroll justify-start lg:justify-center items-center whitespace-nowrap gap-[20px]'>
          {PostsCategory.map((category : Record<string , any> = {})=>{
            return (
              <button key={category.id} className='text-[10px] md:text-base border-[1px] rounded-full w-fit h-fit py-2 px-7'>{he.decode(category.name)}</button>
            )
          })}
        </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 md:w-[1190px] my-0 m-auto'>
          {Posts.map((post : Record<string , any> = {})=>{
            return (
              <BlogCard key={post.id} title={post.title.rendered} date={post.date} image={post._embedded["wp:featuredmedia"][0].source_url} readTime={post.meta["read-time"]} slug={post.slug} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ResourcesPage