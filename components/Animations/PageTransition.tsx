"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({children} : {children : React.ReactNode}) => {
  const pathname = usePathname();

 
  const variants = {
    initial: {
      opacity: 1,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    animate: {
      opacity: 0,
      transition: {delay: 1.5 , duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
   
  };
  

  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div variants={variants} initial="initial" animate="animate" transition={{ease:[0.76, 0, 0.24, 1]}}
            className="fixed top-0 left-0 w-screen h-screen bg-white z-[99] pointer-events-none"
            />
        </div>
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
