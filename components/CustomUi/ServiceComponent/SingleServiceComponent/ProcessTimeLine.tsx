"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform  } from "framer-motion";
import ProcessContent from "./ProcessContent";
import useDragScroll from "@/hooks/useDragScroll";

type ProcessTimeLineProps = {
  ProcessList: Record<string, any>;
};

const ProcessTimeLine = ({ ProcessList }: ProcessTimeLineProps) => {

  const container = useDragScroll<HTMLDivElement>();


  return (
    <div ref={container} className="flex flex-row flex-nowrap overflow-x-scroll hideScroll whitespace-nowrap space-x-10 relative cursor-grab active:cursor-grabbing">
      {/* <div className="w-full h-2 bg-black absolute" /> */}
      {ProcessList.map((item: any, index: number) => {
        return (
          <ProcessContent key={index} item={item} />             
       
        );
      })}
      
    </div>
  );
};

export default ProcessTimeLine;
