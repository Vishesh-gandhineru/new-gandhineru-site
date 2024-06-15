"use client"

import { useCursorState } from '@/store/useCursorState'
import Image from 'next/image'
import React from 'react'


type BlogCardProps = {
    title: string
    date: Date
    image: string
    readTime: number
}

const BlogCard = ({title , date , image , readTime} : BlogCardProps) => {

  const {setCursorType , setCursorText} = useCursorState();

  return (
    <div className=' relative' onMouseEnter={()=>{setCursorType("BlogCard"); setCursorText("View")}} onMouseLeave={()=>{setCursorText("") ; setCursorType("default")} }>
        <div className='w-full h-[300px] relative'>
            <Image src={image} layout='fill' objectFit='cover' alt={title} className='rounded-[20px]'/>
        </div>
        <div className='flex flex-col gap-2 mt-5'>
        <h3 className=' font-Satoshi text-base'>{title}</h3>
        <p className='text-[12px] uppercase text-gray'>{date.toDateString()}</p>
        </div>
        <span className=' absolute top-3 left-3 bg-white rounded-full px-5 py-2 text-primary text-sm uppercase'>
        {readTime} min read
        </span>
    </div>
  )
}

export default BlogCard