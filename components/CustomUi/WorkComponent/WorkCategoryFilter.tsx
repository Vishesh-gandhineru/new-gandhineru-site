"use client"

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { useSearchParams , useRouter } from 'next/navigation'


type WorkCategoryFilterProps = {
    categories : Array<Record<string , string&number>>
    activeCategory : string
}

const WorkCategoryFilter = ({categories} : WorkCategoryFilterProps) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const id = searchParams.get('id');

    const [activeCategory, setActiveCategory] = useState(category);
    const [activeCategoryId, setActiveCategoryId] = useState(id ? parseInt(id) : 0);

    useEffect (() => {
       router.push(`/work?category=${activeCategory ? activeCategory : "all"}&id=${activeCategoryId}` , {
        scroll: false,
       })
    }, [activeCategory , category])

  return (
   <div className='flex gap-5'>
    <div>
        <p onClick={()=>{setActiveCategory('all'); setActiveCategoryId(0)}} className={cn("text-[#868686] cursor-pointer", [
                    category == "all" ? "font-bold text-primary" : ""
                
                ])}>All</p>
    </div>
    {categories.map((category)=> {
        return (
            <div key={category.id}>
                <p onClick={()=>{setActiveCategory(category.slug); setActiveCategoryId(category.id)}} className={cn("text-[#868686] cursor-pointer", [
                    activeCategory === category.slug ? "font-bold text-primary" : ""
                
                ])}>{category.name}</p>
            </div>
        )
    })}
   </div>    
  )
}

export default WorkCategoryFilter