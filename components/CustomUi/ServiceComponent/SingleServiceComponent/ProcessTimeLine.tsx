"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


type ProcessTimeLineProps = {
  ProcessList: Record<string, any>;
};

const ProcessTimeLine = ({ ProcessList }: ProcessTimeLineProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const TimeLine = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end" , "end start"]
  });


 

  return (
    <div className="w-[500px] grid gap-[150px] relative" ref={scrollRef}>
      {ProcessList.map((item: any, index: number) => {
        return (
          <div key={index} className="flex w-full justify-between">
            <div className="process-title w-[20%] text-[20px]">
              {item["process-title"]}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: item["process-content"] }}
              className="w-[40%] text-base"
            />
          </div>
        );
      })}
      <div className="processTimeLine w-[2px] bg-[#f1f1f1] h-full absolute top-[50%] left-[40%] translate-y-[-50%]">
        {/* <span className="dot absolute bg-blue-500 w-4 h-4 rounded-full top-0 left-[50%] translate-x-[-50%]" /> */}
        <motion.span
        ref={TimeLine}
          className="ProgressLine absolute bg-green-500 w-[2px] h-10 top-0 left-[50%] translate-x-[-50%]"
        />
      </div>
    </div>
  );
};

export default ProcessTimeLine;
