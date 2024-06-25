"use client";
import React, { useRef } from "react";
import { MotionConfig, motion, useInView } from "framer-motion";

type ProcessContentProps = {
  item: Record<string, any>;
};

const ProcessContent = ({ item }: ProcessContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const IsinView = useInView(ref);

 const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
   
  return (
    <div ref={ref} className="flex w-full justify-between">
        <MotionConfig  transition={{ duration: 0.5 , ease: "easeInOut" , delay: 0.5}}    >            
      <motion.div  
       variants={variants}
        initial="hidden"
        animate={IsinView ? "visible" : "hidden"}  
       
      className="process-title w-[100%] text-[20px]">
        {item["process-title"]}
      </motion.div>
      <motion.div
      variants={variants}
      initial="hidden"
      animate={IsinView ? "visible" : "hidden"}  
        dangerouslySetInnerHTML={{ __html: item["process-content"] }}
        className="w-[100%] text-base"
      />
        </MotionConfig>
    </div>
  );
};

export default ProcessContent;
