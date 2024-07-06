"use client";
import React, { Suspense, useState } from "react";
import { GetAllWork, GetAllWorkCategory } from "@/ServerActions/FetchWork";
import useSWR from "swr";
import WorkBanner from "./WorkBanner";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "../CustomButton";
import { FilterIcon } from "@/components/CustomIcons";
import { AnimatePresence, motion } from "framer-motion";
import useDragScroll from "@/hooks/useDragScroll";
import { Skeleton } from "@/components/ui/skeleton"
import MotionWrapper from "../MotionWrapper";

const Work = () => {
  const [WorkCategory, setWorkCategory] = useState(0);

  const [ShowFilter, setShowFilter] = useState(false);

  const fetcher = () =>
    GetAllWork(WorkCategory ? WorkCategory : 0, { order: "asc", per_page: 1 });
  const fetchCategory = () =>
    GetAllWorkCategory({ _field: "id,count,name,slug" });
  const {
    data: works,
    isLoading : WorkLoading,
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

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const ref = useDragScroll<HTMLDivElement>();
   
 

  return (
    <div className="grid gap-6">
      <div className="flex flex-col md:flex-row justify-between items-center relative gap-4">
        <div className="w-full md:w-[40%] flex justify-start items-center gap-8 ">
          <h3 className="w-[80%] lg:w-full">Work we’re proud of</h3>
          <span
            onClick={() => {
              setShowFilter(!ShowFilter);
            }}
            className="md:hidden cursor-pointer border-[1px] rounded-full "
          >
            <FilterIcon className="fill-primary stroke-white hover:fill-white hover:stroke-primary  transition-all ease-in-out duration-300" />
          </span>
        </div>
        <div className="flex w-full md:w-[60%] md:justify-end gap-4">
          <div
            ref={ref}
            className={cn(
              " hideScroll workCategory w-[350px] md:w-[550px] lg:w-full  flex overflow-x-scroll cursor-grab active:cursor-grabbing  justify-start lg:justify-start items-center whitespace-nowrap gap-5 text-base relative"
            )}
          >
            {workCategory?.map((category: any, i: number) => {
              return (
                <AnimatePresence key={i}>
                  <motion.p
                    variants={variants}
                    animate={ShowFilter ? "open" : "closed"}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.1 * i,
                    }}
                    onClick={() => handleCategoryChange(category.id)}
                    key={category.id}
                    className={cn(
                      "cursor-pointer text-[#868686] w-fit select-none",
                      [
                        WorkCategory == category.id
                          ? "text-primary font-bold"
                          : "",
                      ]
                    )}
                  >
                    {category.name}
                  </motion.p>
                </AnimatePresence>
              );
            })}
          </div>
          <span
            onClick={() => {
              setShowFilter(!ShowFilter);
            }}
            className="hidden md:inline-block cursor-pointer border-[1px] rounded-full "
          >
            <FilterIcon className="fill-primary stroke-white hover:fill-white hover:stroke-primary  transition-all ease-in-out duration-300" />
          </span>
        </div>
      </div>
      <div className="w-full">
        {WorkLoading ? <Skeleton className="w-full h-[400px] md:h-[580px] rounded-[20px]" /> :  <div className="grid grid-cols-1 gap-x-5 gap-y-14">
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
          
        </div>}
       
        <div className="text-right">
          <PrimaryButton href="/work">View all Work</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Work;


export const WorkLoading = () => {
  return (
    <div className="h-full w-full">
      Loading...
    </div>
  )
} 
