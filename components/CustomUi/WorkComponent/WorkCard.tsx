"use client"

import React, { Suspense } from "react";
import Image from "next/image";
import he from 'he'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MotionDiv } from "../MotionDiv";
import TransitionLink from "@/components/Animations/TransitionLink";
type WorksProps = {
  image: string;
  title: string;
  tags: Array<{ name: string }>;
  slug: string;
  className?: string;
  i: number
};

const WorkCard = ({ image, title, tags, slug , className, i}: WorksProps) => {
  return (
    <MotionDiv 
    initial={{opacity: 0 , y: 50}}
    whileInView={{opacity: 1 , y: 0}}
    transition={{duration: 0.3 , ease: "easeInOut" , delay: i * 0.1}}
    className={cn(" space-y-8", [className])}>
      <div className=" workCardImage relative w-full h-[330px] md:h-[450px]">
        <TransitionLink href={`/work/${slug}`}>
        <Image
          src={image}
          alt={title}
          fill={true}
          className=" object-cover object-center rounded-[20px]"
        />
        </TransitionLink>
      </div>
      <div>
        <h3 className=" text-primary mb-3">{title}</h3>
        <div className=" flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <span key={index} className=" border-[1px] rounded-full px-5 py-3 border-[#D0D0D0] uppercase text-sm leading-3 tracking-wider font-normal">{he.decode(tag.name)}</span>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

export default WorkCard;
