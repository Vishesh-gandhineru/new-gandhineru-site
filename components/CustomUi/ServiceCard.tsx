"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

import { PrimaryButton, SecondaryButton } from "./CustomButton";
import { MotionDiv } from "./MotionDiv";

type ServiceCardProps = {
  bgImage: string;
  serviceContent: string;
  title: string;
  slug: string;
  i: number;
  range: number[];
  targetScale: number;
  Progress: any;
};

const ServiceCards = ({
  bgImage,
  serviceContent,
  title,
  slug,
  i,
  range,
  targetScale,
  Progress,
}: ServiceCardProps) => {
 
 
  const stackScale = useTransform(Progress, range, [1, targetScale]);
  return (
    <MotionDiv
      id={slug}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(" h-full sticky grid place-content-center top-[20%]")}
    >
      <motion.div     
        className="w-full relative h-[420px] md:h-[350px] lg:h-[420px] bg-cover rounded-[20px] bg-center p-7 flex flex-col justify-end pb-[50px]"
        style={{ backgroundImage: `url(${bgImage})`, scale: stackScale , top: `calc(-5vh + ${i * 25}px)` }}
      >
        <motion.div 
        initial={{opacity: 0 , y: 50}}
        whileInView={{opacity: 1 , y: 0}}
        transition={{duration: 0.5 , ease: "easeInOut"}}
        className="w-full md:w-[60%] lg:w-[50%] flex flex-col gap-6">
          <h2 className="text-white">{title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: serviceContent }}
            className="text-wrap"
          />

          <div className="flex gap-12">
            <PrimaryButton
              className="text-white bg-[#242120] text-[12px] md:text-base"
              href={`/services/${slug}`}
            >
              Take it ahead
            </PrimaryButton>

            <SecondaryButton
              href="/services"
              className="text-base text-white text-[12px] md:text-base"
              arrowColor="white"
            >
              View Projects
            </SecondaryButton>
          </div>
        </motion.div>
      </motion.div>
    </MotionDiv>
  );
};

export default ServiceCards;
