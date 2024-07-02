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
    <div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="flex flex-col lg:flex-row gap-5"
      >
        <div>
          <Heading
            Heading="The G&N Journal"
            subHeading="Journey through our minds & learnings"
          />
          <div className="mt-[20px]">
            <BlogCategorySelect category={category} value={value} setValue={setValue}/>
          </div>
          <div className=" relative mt-[50px] ">
            <CarouselNext className=" relative" />
            <CarouselPrevious className=" relative" />
          </div>
        </div>

        <div className="w-[80%]">
          <CarouselContent>
            {post?.map((post: any) => {
              return (
                <CarouselItem
                  key={post.id}
                  className="md:basis-1/2 lg:basis-[30%]"
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
