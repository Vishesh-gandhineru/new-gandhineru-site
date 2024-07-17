"use client"

import React, {useEffect, useState} from 'react'
import Megamenu from './Megamenu'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import path from 'path'


const MenuButton = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname)
  const [isActive, setIsActive] = useState(false)


  if (currentPath !== pathname) {
    setCurrentPath(pathname)
    setIsActive(false)
  }


  return (
    <div className=' relative'>
      <button className={cn('relative w-[40px] h-[40px] bg-primary rounded-full MenuIcon z-[9991]' , [
        isActive ? 'bg-white before:bg-primary after:bg-primary MenuIconClose' : 'bg-primary'
      
      ])} onClick={()=>setIsActive(!isActive)}></button>
    <Megamenu isActive={isActive}/>
    </div>
  )
}

export default MenuButton