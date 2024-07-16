"use client"

import { useCursorState } from '@/store/useCursorState'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import TransitionLink from '../Animations/TransitionLink'



type BlogCardProps = {
    title: string
    date: string
    image: string
    readTime: number
    slug: string
    index?: number

}

const BlogCard = ({title , date , image , readTime , slug , index = 0 } : BlogCardProps) => {

  const {setCursorType , setCursorText} = useCursorState();

  const PostDate = new Date(date);
  const Months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]
  const FormatedDate = `${PostDate.getDate()} ${Months[PostDate.getMonth()]} ${PostDate.getFullYear()}`

  return (
  
    
    <motion.div 
    initial={{opacity: 0 , y: 50}}
    animate={{opacity: 1 , y: 0}}
    transition={{duration: 0.3 , ease: "easeInOut", delay: 0.1 * index}}
    className=' relative' onMouseOver={()=>{setCursorType("BlogCard"); setCursorText("Read")}} onMouseOut={()=>{setCursorText("") ; setCursorType("default")} } onClick={()=>{setCursorText("") ; setCursorType("default")}}>
          <TransitionLink href={`/blogs/${slug}`}>          
        <div className='w-full h-[300px] relative'>
            <Image src={image} fill alt={title} className='rounded-[20px] object-cover' quality={100}/>
        </div>
          </TransitionLink>
        <div className='flex flex-col gap-2 mt-5'>
        <h3 className=' font-Satoshi text-base'>{title}</h3>
        <p className='text-[12px] uppercase text-gray'>{FormatedDate}</p>
        </div>
        <span className=' absolute top-3 left-3 bg-white rounded-full px-5 py-2 text-primary text-sm uppercase'>
        {readTime} min read
        </span>
    </motion.div>

  )
}

export default BlogCard