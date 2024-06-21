"use client"

import { useCursorState } from '@/store/useCursorState'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


type BlogCardProps = {
    title: string
    date: string
    image: string
    readTime: number
    slug: string
}

const BlogCard = ({title , date , image , readTime , slug} : BlogCardProps) => {

  const {setCursorType , setCursorText} = useCursorState();

  const PostDate = new Date(date);
  const Months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]
  const FormatedDate = `${PostDate.getDate()} ${Months[PostDate.getMonth()]} ${PostDate.getFullYear()}`

  return (
    <div className=' relative' onMouseOver={()=>{setCursorType("BlogCard"); setCursorText("View")}} onMouseOut={()=>{setCursorText("") ; setCursorType("default")} } onClick={()=>{setCursorText("") ; setCursorType("default")}}>
        <div className='w-full h-[300px] relative'>
          <Link href={`/blogs/${slug}`}> 
          
            <Image src={image} fill alt={title} className='rounded-[20px] object-cover' quality={100}/>
          </Link>
        </div>
        <div className='flex flex-col gap-2 mt-5'>
        <h3 className=' font-Satoshi text-base'>{title}</h3>
        <p className='text-[12px] uppercase text-gray'>{FormatedDate}</p>
        </div>
        <span className=' absolute top-3 left-3 bg-white rounded-full px-5 py-2 text-primary text-sm uppercase'>
        {readTime} min read
        </span>
    </div>
  )
}

export default BlogCard