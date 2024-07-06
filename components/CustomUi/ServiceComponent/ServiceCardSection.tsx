"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import DOMPurify from "isomorphic-dompurify";
import { PrimaryButton, SecondaryButton } from "../CustomButton";
import ServiceCards from "../ServiceCard";
import useSWR from "swr";
import { GetAllServices } from "@/ServerActions/FetchServices";


const ServiceCardSection = () => {
  const fetcher = () => GetAllServices({ _fields: "id,meta,slug,status,title" , service_category_exclude: 17});
  const { data } = useSWR("GetAllServices", fetcher);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 50%", "end start"],
  });

  return (
    <section
      className="flex flex-col gap-3 relative mb-[80px]"
      ref={container}
    >
      {data?.map((item: any, i: number) => {
        const bgImage = item.meta["banner-image"];
        const serviceContent = DOMPurify.sanitize(
          item.meta["overview-content"]
        );
        const targetScale = 1 - (data.length - i) * (0.05);
        return (
          <ServiceCards
            key={item.id}
            i={i}
            title={item.title.rendered}
            bgImage={bgImage}
            serviceContent={serviceContent}
            slug={item.slug}
            range={[i * 0.07, 1]}
            targetScale={targetScale}
            Progress={scrollYProgress}
          />
        );
      })}
    </section>
  );
};

export default ServiceCardSection;
