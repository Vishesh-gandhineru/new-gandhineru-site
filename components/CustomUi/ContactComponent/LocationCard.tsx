"use client";

import React, { useState } from "react";
import { motion, animate, AnimatePresence } from "framer-motion";
import { Dot } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import useWindowSize from "@/hooks/useWindowsize";

type LocationCardProps = {
    location: string;
    time: string;
    description: string;
    imageSrc: string;
    open?: boolean;
};

const LocationCard = ({location , time , description , imageSrc , open} : LocationCardProps) => {
  const [isOpen, setIsOpen] = useState(open || false);
  const { width:windowWidth } = useWindowSize();

  const Imagevariants = {
    open: {borderRadius: "20%" , width: windowWidth > 1024 ? "20%" : "20%" , height: windowWidth > 1024 ? "50%" : "50%" , left : windowWidth > 1024 ? "70%" : "79%" , top: windowWidth > 1024 ? "50%" : "80%"},
    closed: { width: "100%" , height: "100%" , borderRadius: "20px" },
  };

  const variants = {
    open: { opacity: 1 , width: windowWidth > 1024 ? "35%" : "100%" },
    closed: { opacity: 1 , width: windowWidth > 1024 ? "20%" : windowWidth > 767 ? "30%" : "100%" },
  };

  return (
    <motion.div
    layout
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
      className=" rounded-[20px] relative"
    >
      <div className="border-[1px] rounded-[20px] flex justify-center flex-col px-4 lg:px-8 relative h-[150px] overflow-hidden">
        <AnimatePresence>
        <motion.div 
         animate={isOpen ? {opacity:1 , y:0} : {opacity:0 , y: -100}}
         transition={{duration: 0.5 , delay:0.1 , ease: "easeInOut"}}
         className=" space-y-4"
        >
        <div className="flex gap-2">
          <p className="font-bold">{location}</p>
          <Dot />
          <p className="font-bold">{time}</p>
        </div>
        <div className="w-[60%]">
          <p>{description}</p>
        </div>
        </motion.div>            
        </AnimatePresence>
        <motion.div
        layout
          className="absolute top-1/2 -translate-y-1/2 left-0 overflow-hidden"
          variants={Imagevariants}
          animate={isOpen ? "open" : "closed"}
        >
          <Image
            src={imageSrc ? imageSrc : "/Images/Creativity bg.png"}
            alt=""
            fill
            className=" object-cover object-center"
          />
        </motion.div>
          <h4 className={cn("text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit", [
            isOpen ? "hidden" : "inline-block"
          ])}>{location}</h4>
      </div>
    </motion.div>
  );
};

export default LocationCard;
