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
  i: number;
  comingSoon?: string;
};

const WorkCard = ({ image, title, tags, slug , className, comingSoon ,i}: WorksProps) => {

  console.log(comingSoon, "coming soon in work card");

  return (
    <MotionDiv 
    initial={{opacity: 0 , y: 50}}
    whileInView={{opacity: 1 , y: 0}}
    viewport={{ once: true }}
    transition={{duration: 0.3 , ease: "easeInOut" , delay: 0.1}}
    className={cn(" space-y-8", [className])}>
      <div className=" workCardImage relative w-full h-[330px] md:h-[300px] lg:h-[450px]">
       
        <TransitionLink href={comingSoon === "true" ? "#" : `/work/${slug}`}>
        <Image
          src={image}
          alt={title}
          fill={true}
          className=" object-cover object-center rounded-[20px]"
        />
        {comingSoon === "true" && (
          <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/50  flex justify-center items-center rounded-[20px] transition-all ease-in-out duration-300 group">
            <span className=" text-white text-lg font-semibold text-center rounded-full w-28 h-28 grid place-content-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100" >Coming <br></br>Soon</span>
          </div>
        )}
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
