"use client"

import React, {useState} from 'react'
import Megamenu from './Megamenu'
import { cn } from '@/lib/utils'

const MenuButton = () => {
  const [isActive, setIsActive] = useState(false)
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