"use client";
import React, { Suspense, useState } from "react";
import Image from "next/image";
import he from "he";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCursorState } from "@/store/useCursorState";
import { motion } from "framer-motion";

type WorksProps = {
  image: string;
  title: string;
  tags: Array<{ name: string }>;
  slug: string;
  className?: string;
};

const WorkBanner = ({ image, title, tags, slug, className }: WorksProps) => {
  const { setCursorType, setCursorText } = useCursorState();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
      className={cn("space-y-8 relative overflow-hidden", [className])}
      onHoverStart={() => {
        setCursorType("WorkCard");
        setCursorText("Click");
        setIsHovering(true);
      }}
      onHoverEnd={() => {
        setCursorText("");
        setCursorType("default");
        setIsHovering(false);
      }}
    >
      <div className=" workCardImage relative w-full h-[400px] md:h-[580px]">
        <Link href={`/work/${slug}`}>
          <Image
            src={image}
            alt={title}
            fill={true}
            className=" object-cover object-center rounded-[20px]"
          />
        </Link>
        <div
          className={cn(
            "pointer-events-none w-full h-full  absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10 rounded-[20px] transition-all duration-800 ease-in ",
            [isHovering ? "glassmorphism" : ""]
          )}
        />
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0 , y: 50}}
          animate={isHovering ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute bottom-12 left-4 md:bottom-16 md:left-10 z-20 flex justify-center items-center gap-6"
        >
          <h3 className=" text-primary  text-white">{title}</h3>
          <div className="w-fit p-2 rounded-full bg-white">
            <ArrowRight className=" rotate-[-45deg]" />
          </div>
        </motion.div>
        <div className=" flex flex-wrap gap-4 absolute top-4 md:top-8 md:left-8 left-4 z-20">
          {tags.map((tag, index) => (
            <motion.span
              initial={{ opacity: 0, y: -50 }}
              animate={
                isHovering ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
              }
              transition={{
                duration: 0.2,
                delay: 0.1 * (index / 2),
                ease: "easeInOut",
              }}
              key={index}
              className="text-[10px] border-[1px] rounded-full px-5 py-3 border-[#D0D0D0] bg-white uppercase md:text-sm leading-3 tracking-wider font-normal"
            >
              {he.decode(tag.name)}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkBanner;

