"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ProcessContent from "./ProcessContent";

type ProcessTimeLineProps = {
  ProcessList: Record<string, any>;
};

const ProcessTimeLine = ({ ProcessList }: ProcessTimeLineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["1% end", "end 50%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["1", "35"]);

  return (
    <div className="w-[500px] grid gap-[150px] relative" ref={scrollRef}>
      {ProcessList.map((item: any, index: number) => {
        return (
          <ProcessContent key={index} item={item} />             
       
        );
      })}
      <div className="processTimeLine w-[3px] bg-[#f1f1f1] h-full absolute top-[50%] left-[35%] translate-y-[-50%] overflow-hidden rounded-full">
        {/* <span className="dot absolute bg-blue-500 w-4 h-4 rounded-full top-0 left-[50%] translate-x-[-50%]" /> */}
        <motion.span
          className="ProgressLine absolute bg-green-500 w-full h-6 top-0 left-[50%] translate-x-[-50%] origin-top "
          style={{ scaleY: y }}
        />
      </div>
    </div>
  );
};

export default ProcessTimeLine;
