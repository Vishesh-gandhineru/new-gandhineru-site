"use client";

import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  SocialButton,
} from "@/components/CustomUi/CustomButton";
import { ArrowRight, ContactIcon } from "@/components/CustomIcons";
import HeroBanner from "@/components/CustomUi/HeroBanner";
import ContactForm from "@/components/CustomUi/ContactForm";
import DemoBlogPost from "@/utils/DemoBlogPost";
import BlogCard from "@/components/CustomUi/BlogCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ShflleCard from "@/components/CustomUi/ShflleCard";
import { AnimatePresence, motion } from "framer-motion";

const page = () => {
  const variantsEnter = {
    initial: {
      top: "100%",
    },
    start: {
      top: "0%",
      opacity: [1],
    },
  };

  const variantsExit = {
    initial: {
      top: "0%",
      opacity: 0,
    },
    start: {
      top: "100%",
      opacity: 1,
    },
  };
  return (
    <section className="h-screen w-screen grid place-content-center">
      {/* <div className="h-screen">
        
        <motion.div 
        variants={variantsEnter}
        initial="initial"
        animate="start"
        transition={{duration:1, ease:[0.76, 0, 0.24, 1]}}
        className="fixed top-0 right-0 left-0 w-screen h-screen pointer-events-none z-[100] bg-primary" />
        <motion.div 
        variants={variantsExit}
        initial="initial"
        animate="start"
        transition={{duration:1 , delay:1.2 ,ease:[0.76, 0, 0.24, 1]}}
        className="fixed top-0 right-0 left-0 w-screen h-screen pointer-events-none z-[100] bg-primary" />
      </div> */}


        <Link href="#" className="flex gap-3 bg-black text-white" >
          <div>Button</div> 
          <div>arrow</div>
        </Link>

    </section>
  );
};

export default page;
