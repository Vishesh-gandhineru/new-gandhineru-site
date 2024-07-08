"use client";
import React, { useRef } from "react";
import { MotionConfig, motion, useInView } from "framer-motion";

type ProcessContentProps = {
  item: Record<string, any>;
};

const ProcessContent = ({ item }: ProcessContentProps) => {

   
  return (
    <div className="flex flex-col gap-4 justify-start items-start select-none">              
      <div        
      className="process-title text-[20px]">
        {item["process-title"]}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: item["process-content"] }}
        className="w-[200px] lg:w-[200px] text-base text-wrap"
      />
     
    </div>
  );
};

export default ProcessContent;
