"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";

const CurveEffect = () => {
  const pathname = usePathname();

  const variantsEnter = {
    initial: {
        top: "0",
      
    },
    start : {
        top : "100%",
       
    } , 
    exit : {
        top : ["100%" , "0%"],
        
    }}
 

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div 
        variants={variantsEnter}
        initial="initial"
        animate="start"
        exit="exit"
        transition={{duration:1, ease:[0.76, 0, 0.24, 1]}}
        className="fixed top-0 right-0 left-0 w-screen h-screen pointer-events-none z-[100] bg-primary" />
       
        </div>
    </AnimatePresence>
  );
};

export default CurveEffect;
