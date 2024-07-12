"use client"

import { LogoWhite } from '@/components/CustomIcons'
import React from 'react'
import {motion} from 'framer-motion'


const template = ({children} : {children : React.ReactNode}) => {

  return (
    <div>
    {/* <motion.div 
    layout
    initial={{height:"100vh"}}
    animate={{height:"0"}}
    transition={{duration:1.5 , delay:0.5 ,ease:[0.76, 0, 0.24, 1]}}
    className='w-screen h-screen grid place-content-center bg-white z-[2000] fixed top-0 left-0 pointer-events-none overflow-hidden'> */}
      {/* <motion.div 
      animate={{top:"60%"}}
      transition={{duration:1.4 , delay:0.5, ease:[0.76, 0, 0.24, 1]}}
      className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <LogoWhite className="w-[100%] h-[100px]" />
      </motion.div> */}
    {/* </motion.div> */}
    {children}
    </div>
  )
}

export default template