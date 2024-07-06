"use client"

import { useCursorState } from '@/store/useCursorState'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


type CardProps = {
    title: string
    image: string

    slug: string
}

const ProjectCard = ({title  , image  , slug} : CardProps) => {

  const {setCursorType , setCursorText} = useCursorState();


  return (
    <div className=' relative' onMouseOver={()=>{setCursorType("BlogCard"); setCursorText("View")}} onMouseOut={()=>{setCursorText("") ; setCursorType("default")} } onClick={()=>{setCursorText("") ; setCursorType("default")}}>
        <div className='w-full h-[250px] md:h-[300px] relative'>
          <Link href={`/works/${slug}`}> 
          
            <Image src={image} fill = {true} sizes='2x' alt={title} className='rounded-[20px] object-cover' quality={100}/>
          </Link>
        </div>
        <div className='flex flex-col gap-2 mt-5'>
        <h3 className=' font-Satoshi text-base'>{title}</h3>      
        </div>
    </div>
  )
}

export default ProjectCard