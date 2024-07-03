"use client";
import React, { Suspense, useState } from "react";
import { GetAllWork, GetAllWorkCategory } from "@/ServerActions/FetchWork";
import useSWR from "swr";
import WorkCard from "../WorkComponent/WorkCard";
import WorkBanner from "./WorkBanner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PrimaryButton } from "../CustomButton";

const Work = () => {
  const [WorkCategory, setWorkCategory] = useState(0);
  const fetcher = () =>
    GetAllWork(WorkCategory ? WorkCategory : 0, { order: "asc", per_page: 1 });
  const fetchCategory = () =>
    GetAllWorkCategory({ _field: "id,count,name,slug" });
  const {
    data: works,
    isLoading,
    error,
  } = useSWR(`GetAllWork/${WorkCategory}`, fetcher);
  const {
    data: workCategory,
    isLoading: categoryLoading,
    error: categoryError,
  } = useSWR("GetAllWorkCategory", fetchCategory);

  const handleCategoryChange = (id: number) => {
    setWorkCategory(id);
  };


  return (
    <div className="grid gap-6">
      <div className="flex flex-col lg:flex-row justify-between items-center relative">
        <h3>Work we’re proud of</h3>
        <div className="workCategory w-[300px] md:w-full  flex overflow-x-scroll justify-center items-start whitespace-nowrap gap-5 text-base">
          {workCategory?.map((category: any) => {
            return (
              <p
                onClick={() => handleCategoryChange(category.id)}
                key={category.id}
                className={cn("cursor-pointer text-[#868686] w-fit", [
                  WorkCategory == category.id ? "text-primary font-bold" : "",
                ])}
              >
                {category.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-x-5 gap-y-14">
          <Suspense fallback={<p className="h-[300px] bg-red-400 text-white">Loading</p>}>
          {works?.map((work: any) => {
            return (
              <WorkBanner
                key={work.id}
                className="workCard"
                image={work._embedded["wp:featuredmedia"][0].source_url}
                title={work?.title.rendered}
                tags={work._embedded["wp:term"][0]}
                slug={work.slug}
              />
            );
          })}
          </Suspense>
        </div>
        <div className="text-right">
          <PrimaryButton>View all Work</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Work;
