"use client";
import React, { Suspense, useState } from "react";
import { GetAllWork, GetAllWorkCategory } from "@/ServerActions/FetchWork";
import useSWR from "swr";
import WorkBanner from "./WorkBanner";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "../CustomButton";
import { FilterIcon } from "@/components/CustomIcons";
import { AnimatePresence, motion } from "framer-motion";

const Work = () => {
  const [WorkCategory, setWorkCategory] = useState(0);

  const [ShowFilter, setShowFilter] = useState(false);

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

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <div className="grid gap-6">
      <div className="flex flex-col lg:flex-row justify-between items-center relative gap-4">
        <div className="w-full flex justify-between items-center ">
          <h3 className="lg:w-full">Work we’re proud of</h3>
          <span
            onClick={() => {
              setShowFilter(!ShowFilter);
            }}
            className="md:hidden cursor-pointer border-[1px] rounded-full "
          >
            <FilterIcon className="fill-primary stroke-white hover:fill-white hover:stroke-primary  transition-all ease-in-out duration-300" />
          </span>
        </div>
        <div
          className={cn(
            "workCategory w-[330px] md:w-full  flex overflow-x-scroll  lg:overflow-visible justify-start lg:justify-start items-center whitespace-nowrap gap-5 text-base relative"
          )}
        >
          {workCategory?.map((category: any, i: number) => {
            return (
              <AnimatePresence>
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
                  className={cn("cursor-pointer text-[#868686] w-fit", [
                    WorkCategory == category.id ? "text-primary font-bold" : "",
                  ])}
                >
                  {category.name}
                </motion.p>
              </AnimatePresence>
            );
          })}

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
        <div className="grid grid-cols-1 gap-x-5 gap-y-14">
          <Suspense
            fallback={
              <p className="h-[300px] bg-red-400 text-white">Loading</p>
            }
          >
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
          <PrimaryButton href="/work">View all Work</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Work;
