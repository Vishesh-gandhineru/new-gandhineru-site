"use client";

import React, { Suspense } from "react";
import motion from "framer-motion";
import { GetAllServices } from "@/ServerActions/FetchServices";
import useSWR from "swr";
import { cn } from "@/lib/utils";
import DOMPurify from "isomorphic-dompurify";
import { PrimaryButton, SecondaryButton } from "./CustomButton";

const ServiceCards = () => {
  const fetcher = () =>
    GetAllServices({ _fields: "id,meta,slug,status,title" , service_category_exclude: 17});

  const { data, isLoading, error } = useSWR("GetAllServices", fetcher);

  return (
    <section className="flex flex-col gap-3">
      {data?.map((item: any) => {
        const bgImage = item.meta["banner-image"];
        const serviceContent = DOMPurify.sanitize(
          item.meta["overview-content"]
        );
        return (
          <div
            key={item.id}
            className="w-full h-[420px] bg-cover rounded-[20px] bg-center p-7 flex flex-col justify-end pb-[50px]"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="w-[50%] grid gap-6">
              <h2 className="text-white">{item.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: serviceContent }}></div>

              <div className="flex gap-12">
                <PrimaryButton className="text-white bg-[#242120]" href={`/services/${item.slug}`}>
                  Take it ahead
                </PrimaryButton>

                <SecondaryButton href="/services" className="text-base text-white" arrowColor="white"> 
                View Projects
                </SecondaryButton>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServiceCards;
