"use client";

import React from "react";
import { motion, Reorder } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowsize";

type Item = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type ShflleCardProps = {
  className?: string;
  content : Item[];
  setContent : React.Dispatch<React.SetStateAction<Item[]>>
};


const ShflleCard = ({className , content , setContent} : ShflleCardProps) => {
  
  const {width} = useWindowSize()
  const onDragEnd = (draggedItem: Item) => {
    setContent((prevContent) => {
      return [
        ...prevContent.filter((item) => item.id !== draggedItem.id),
        draggedItem,
      ];
    });
  };

  return (
    <div className="w-full h-[200px] flex justify-center items-center gap-10 relative">
      {content?.map((item, index) => (
        <motion.div
          drag={"x"}
          dragConstraints={{ right: 100, left: -100, top: -100, bottom: 100 }}
          dragSnapToOrigin
          onDragEnd={() => onDragEnd(item)}
          initial={{ x: width >= 767 ? index * 20 : 0 }}
          animate={{ x: width >= 767 ? index * 20 : 0 }}
          transition={{ duration: 0.5 , ease:"backOut" , type:"spring" }}
          style={{
            zIndex: content.length - index,
          }}
          className={
            "flex  w-full md:w-[600px] lg:w-[500px] xl:w-[600px] h-full absolute bg-white"
          }
          key={item.id}
        >
          <div className="p-6 lg:p-12 border-[1px] rounded-[20px] border-[#DADADA] relative">
            <div className="w-full lg:w-[70%] flex flex-col gap-3 justify-center">
              <p>
                {item.description}
              </p>
              <p>- {item.title}</p>
            </div>
            <Image
              src={item.image}
              width={110}
              height={30}
              alt="Logo Banner"
              className="mt-8 lg:mt-0 float-end relative lg:absolute lg:bottom-[12%] lg:right-[5%]"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ShflleCard;
