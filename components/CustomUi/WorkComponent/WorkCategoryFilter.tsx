"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type WorkCategoryFilterProps = {
  categories: Array<Record<string, string & number>>;
  activeCategory: string;
};

const WorkCategoryFilter = ({ categories }: WorkCategoryFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const id = searchParams.get("id");

  const [activeCategory, setActiveCategory] = useState(category);
  const [activeCategoryId, setActiveCategoryId] = useState(
    id ? parseInt(id) : 0
  );

  useEffect(() => {
    if (activeCategoryId !== 0) {
      router.push(
        `/work?category=${
          activeCategory ? activeCategory : "all"
        }&id=${activeCategoryId}`,
        {
          scroll: false,
        }
      );
    } else {
      router.push(`/work?category=${activeCategory ? activeCategory : "all"}`, {
        scroll: false,
      });
    }
  }, [activeCategory, category , activeCategoryId]);

  return (
    <div className="flex items-center justify-start  gap-5 overflow-x-scroll whitespace-nowrap md:overflow-auto">
      <div>
        <p
          onClick={() => {
            setActiveCategory("all");
            setActiveCategoryId(0);
          }}
          className={cn("cursor-pointer font-bold text-primary", [
            category != "all" ? "text-[#868686]" : "",
          ])}
        >
          All
        </p>
      </div>
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <p
              onClick={() => {
                setActiveCategory(category.slug);
                setActiveCategoryId(category.id);
              }}
              className={cn("text-[#868686] cursor-pointer", [
                activeCategory === category.slug
                  ? "font-bold text-primary"
                  : "",
              ])}
            >
              {category.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkCategoryFilter;
