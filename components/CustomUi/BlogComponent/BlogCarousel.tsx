"use client";

import { GetAllPosts, GetAllPostsCategory } from "@/ServerActions/FetchPost";
import React from "react";
import useSWR from "swr";
import he from 'he'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import BlogCard from "../BlogCard";
import Heading from "../Heading";
import { BlogCategorySelect } from "./BlogCategorySelect";
import { ShotLogoGn } from "@/components/CustomIcons";


const BlogCarousel = () => {

const [value, setValue] = React.useState("")

  const fetchPost = () =>
    GetAllPosts({
      _fields: "id,slug,title,meta,stick,_links,date,featured_media",
    });
  const fetchCategory = () => GetAllPostsCategory({ _fields: "id,name,slug" });
  const {
    data: post,
    isLoading: PostLoading,
    error: postError,
  } = useSWR("GetAllPosts", fetchPost);
  const {
    data: category,
    isLoading: categoryLoading,
    error: categoryError,
  } = useSWR("GetAllPostsCategory", fetchCategory);

type CategoryType = {
    id: string;
    name: string;
    slug: string;
    };
    

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full flex flex-col lg:flex-row gap-10"
      >
        <div className="w-full lg:w-fit">
        <div className="flex flex-col gap-2 lg:gap-2">
          <p className="text-body md:text-[20px] leading-[30px] tracking-normal">
          Journey through our minds & learnings
          </p>
          <h3 className="flex flex-row items-center gap-3">The <span className=" inline"><ShotLogoGn className=" fill-[#C0C0C0]"/></span> Journal</h3>
        </div>        
          <div className="mt-[20px]">
            <BlogCategorySelect category={category} value={value} setValue={setValue}/>
          </div>
          <div className="relative mt-[50px] hidden md:block">
            <CarouselNext className=" relative" />
            <CarouselPrevious className=" relative" />
          </div>
        </div>

        <div className="w-full md:w-[80%]">
          <CarouselContent>
            {post?.map((post: any) => {
              return (
                <CarouselItem
                  key={post.id}
                  className="basis-[80%] md:basis-1/2 lg:basis-[30%]"
                >
                  <BlogCard
                    key={post.id}
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
        </div>
      </Carousel>
    </div>
  );
};

export default BlogCarousel;
