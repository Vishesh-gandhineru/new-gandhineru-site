"use client"

import React from 'react'
import he from 'he'
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { MotionButton } from '../MotionDiv';
import { useSearchParams } from 'next/navigation';


const BlogCategoryButton = ({category , i} : {category : any , i : number}) => {
    const {name , count}  = category;
    const router = useRouter();
    const searchParams = useSearchParams();
    const categoryId = searchParams.get('category')

   const handleChange = (id : number) => {
    router.push(`/blogs?category=${id}` , {scroll:false})
   }

  return (
    <MotionButton 
    initial={{y:100}}
    animate={{y:0}}
    transition={{duration:1 , delay : i * 0.3, ease: [0.76, 0, 0.24, 1]}}

    className={cn('text-[10px] md:text-base border-[1px] rounded-full w-fit h-fit py-2 px-7', [
        count === 0 ? "hidden" : "" ,
        categoryId == category.id  ? "bg-primary text-white" : "bg-white text-primary",
        
        
    ])}
    onClick={()=> handleChange(category.id)}
    >{he.decode(name)}</MotionButton>
  )
}

export default BlogCategoryButton