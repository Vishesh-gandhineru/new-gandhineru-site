"use client";
import React, { useRef } from "react";
import { MotionConfig, motion, useInView } from "framer-motion";

type ProcessContentProps = {
  item: Record<string, any>;
};

const ProcessContent = ({ item }: ProcessContentProps) => {

   
  return (
    <div className="flex flex-col gap-4 justify-start items-start select-none relative flex-none w-[300px]">
      <div className="w-[140%] h-[1px] bg-[#C7C7C7] absolute top-1" />              
      <div        
      className="process-title text-[20px] mt-8 font-normal">
        {item["process-title"]}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: item["process-content"] }}
        className="text-[12px] text-wrap time-line-content"
      />
     
    </div>
  );
};

export default ProcessContent;
