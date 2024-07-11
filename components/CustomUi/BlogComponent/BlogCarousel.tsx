"use client";

import { GetAllPosts, GetAllPostsCategory } from "@/ServerActions/FetchPost";
import React from "react";
import useSWR from "swr";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import BlogCard from "../BlogCard";

import { BlogCategorySelect } from "./BlogCategorySelect";
import { ShotLogoGn } from "@/components/CustomIcons";
import BlogLoading from "./BlogLoading";

const BlogCarousel = () => {
  const [SelectCategory, setSelectCategory] = React.useState("");

  const fetchPost = () =>
    GetAllPosts({
      _fields: "id,slug,title,meta,stick,_links,date,featured_media",categories: SelectCategory === "" ? undefined : SelectCategory
    });
  const fetchCategory = () => GetAllPostsCategory({ _fields: "id,name,slug,count" });
  const {
    data: post,
    isLoading: PostLoading,
    error: postError,
  } = useSWR(`GetallPost/${SelectCategory}`, fetchPost);
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
            <h3 className="flex flex-row items-center gap-3">
              The{" "}
              <span className=" inline">
                <ShotLogoGn className=" fill-[#C0C0C0]" />
              </span>{" "}
              Journal
            </h3>
          </div>
          <div className="mt-[20px]">
            <BlogCategorySelect
              category={category}
              value={SelectCategory}
              setValue={setSelectCategory}
            />
          </div>
          <div className="relative mt-[50px] hidden md:block">
            <CarouselNext className=" relative" />
            <CarouselPrevious className=" relative" />
          </div>
        </div>

        {PostLoading ? <div className="w-full lg:w-[80%]"><BlogLoading/></div> : <div className="w-full lg:w-[80%]">
          <CarouselContent>
            {post?.map((post: any, i: number) => {
              return (
                <CarouselItem
                  key={post.id}
                  className="basis-[80%] md:basis-1/2 lg:basis-[40%] xl:basis-[30%]"
                >
                  <BlogCard
                    key={post.id}
                    index={i}
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
        </div>}
      </Carousel>
    </div>
  );
};

export default BlogCarousel;
