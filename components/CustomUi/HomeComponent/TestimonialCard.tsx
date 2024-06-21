"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Image from "next/image"

  import { motion } from "framer-motion"


import React from 'react'

const TestimonialCard = () => {
  return (
    <Carousel>
    <CarouselContent className="-ml-0">     
      <CarouselItem className="p-12 border-[1px] rounded-[20px] border-[#DADADA] relative">
        <div className="w-[70%] flex flex-col gap-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lectus sed eros tempus imperdiet.</p>
            <p>- Name Surname</p>
        </div>
        <Image src='/Images/compony logo.png' width={110} height={30} alt='Logo Banner' className=' absolute bottom-[12%] right-[5%]'/> 
      </CarouselItem>
      <CarouselItem className="p-12 border-[1px] rounded-[20px] border-[#DADADA] relative">
        <div className="w-[70%] flex flex-col gap-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lectus sed eros tempus imperdiet.</p>
            <p>- Name Surname</p>
        </div>
        <Image src='/Images/compony logo.png' width={110} height={30} alt='Logo Banner' className=' absolute bottom-[12%] right-[5%]'/> 
      </CarouselItem>
      <CarouselItem className="p-12 border-[1px] rounded-[20px] border-[#DADADA] relative">
        <div className="w-[70%] flex flex-col gap-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lectus sed eros tempus imperdiet.</p>
            <p>- Name Surname</p>
        </div>
        <Image src='/Images/compony logo.png' width={110} height={30} alt='Logo Banner' className=' absolute bottom-[12%] right-[5%]'/> 
      </CarouselItem>
      
    </CarouselContent>
  </Carousel>
  )
}

export default TestimonialCard