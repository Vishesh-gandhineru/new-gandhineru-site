"use client";

import React, { useEffect } from "react";
import { motion , useAnimate } from "framer-motion";
import { usePathname } from "next/navigation";

import { usePageAnimation } from "@/store/usePageAnimation";
import { LogoWhite } from "../CustomIcons";

const PageTransition = () => {
 const {startAnimation} = usePageAnimation()
  const [scope , animate] = useAnimate()
  
  const path = usePathname();
  useEffect(() => {
    if (startAnimation) {
      const enterAnimation =  () => {
         animate(scope.current, { height: "100vh" }, { duration: 1, ease: [0.76, 0, 0.24, 1] })
         animate("#logo", { opacity: 1, top: "50%"} , { duration: 0.8, ease: [0.76, 0, 0.24, 1] })
      }
      enterAnimation()
    } else {
      const exitAnimation = async () => {
        animate(scope.current, { height: "0vh"  } , { duration: 1.5,delay: 0.8 , ease: [0.76, 0, 0.24, 1] })
        animate("#logo", {opacity:0,  top: "150%"} , { duration: 1.4, delay: 0.8, ease: [0.76, 0, 0.24, 1] })
      }
      exitAnimation()
    }
    return;
 }, [startAnimation])


  return (
    <div>
    <motion.div 
    ref={scope}
    layout
    initial={{height:"0vh"}}
    style={{ transformOrigin: "bottom" }}
    className='w-screen h-screen grid place-content-center bg-primary z-[1000] fixed top-0 left-0 pointer-events-none overflow-hidden'>
      <motion.div 
      id="logo"
      className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <LogoWhite className="w-[100%] h-[100px]" />
      </motion.div>
    </motion.div>

    </div>

  );
};

export default PageTransition;
