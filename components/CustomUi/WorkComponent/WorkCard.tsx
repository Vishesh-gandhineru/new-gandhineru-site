import React from "react";
import Image from "next/image";
import he from 'he'
import { cn } from "@/lib/utils";
import Link from "next/link";

type WorksProps = {
  image: string;
  title: string;
  tags: Array<{ name: string }>;
  slug: string;
  className?: string;
};

const WorkCard = ({ image, title, tags, slug , className}: WorksProps) => {
  return (
    <div className={cn(" space-y-8", [className])}>
      <div className=" workCardImage relative w-full h-[330px] md:h-[450px]">
        <Link href={`/work/${slug}`}>
        <Image
          src={image}
          alt={title}
          fill={true}
          className=" object-cover object-center rounded-[20px]"
        />
        </Link>
      </div>
      <div>
        <h3 className=" text-primary mb-3">{title}</h3>
        <div className=" flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <span key={index} className=" border-[1px] rounded-full px-5 py-3 border-[#D0D0D0] uppercase text-sm leading-3 tracking-wider font-normal">{he.decode(tag.name)}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
