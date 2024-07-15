"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter , useSearchParams } from 'next/navigation'

const LoadMoreBlogBtn = () => {
  const router = useRouter();
    const searchParams = useSearchParams();
   
 
    const handleLoadMore = () => {
       const exsisitingParams = searchParams.get('category');

        router.push(`/blogs?category=${exsisitingParams}&page=2` , {scroll:false})
    }

  return (
    <div className='w-full text-center'>
        <Button onClick={handleLoadMore}>Load More</Button>

    </div>
  )
}

export default LoadMoreBlogBtn