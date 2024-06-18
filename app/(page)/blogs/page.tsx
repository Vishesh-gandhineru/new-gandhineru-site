import React from 'react'
import {GetAllPosts , GetAllPostsCategory} from '@/ServerActions/FetchPost'
import HeroBanner from '@/components/CustomUi/HeroBanner';
import he from 'he'
import BlogCard from '@/components/CustomUi/BlogCard';



const ResourcesPage = async () => { 

  const Posts = await GetAllPosts({_fields : 'id,slug,title,meta,stick,_links,date,featured_media'});
  const PostsCategory = await GetAllPostsCategory({_fields : 'id,name,slug'});
 console.log(Posts)
  return (
    <section>
      <HeroBanner
        className=" bg-hero-blog-banner container"
        buttonText="Book a Clarity Call"
      ></HeroBanner>

      <div className="container my-[80px] flex flex-col gap-[50px]">
        <div className='flex flex-col gap-[20px] justify-center items-center'>
        <h1 className='text-[52px] leading-[66px] text-center w-[50%]'>Access global knowledge in design and development.</h1>
        <div className=' flex gap-[20px]'>
          {PostsCategory.map((category : Record<string , any> = {})=>{
            return (
              <button key={category.id} className='border-[1px] rounded-full w-fit h-fit py-2 px-7'>{he.decode(category.name)}</button>
            )
          })}
        </div>
        </div>
        <div className='grid grid-cols-4 gap-x-8 gap-y-10 w-[1190px] my-0 m-auto'>
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