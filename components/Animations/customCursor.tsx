"use client"

import React, { useRef, useState, useEffect } from 'react';
import { MotionValue, motion , useMotionValue, useSpring } from 'framer-motion';
import { useCursorState } from '@/store/useCursorState';


const CursorFollower = () => {
 
   const {cursorType , cursorText} = useCursorState();

    const mouse  = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }


   //Smooth out the mouse values
   const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
   const smoothMouse : { x: MotionValue<any>; y: MotionValue<any>; } = {
     x: useSpring(mouse.x, smoothOptions),
     y: useSpring(mouse.y, smoothOptions)
   }

   const manageMouseMove = (e: MouseEvent) => {
    const {clientX, clientY} = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
   }
 

   useEffect(()=>{
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
        window.removeEventListener("mousemove", manageMouseMove);
    }
   })

   const variants = {
    default: {
        width : 16,
        height : 16,
        backgroundColor : "#D10000",
    },

    BlogCard : {
        width : 80,
        height : 80,
        backgroundColor : "#373737",
      
        
    }, 
 
   }

return (  
        <motion.div
            className="cursor fixed rounded-full bg-[#D10000] shadow-md w-4 h-4 z-[1000] pointer-events-none translate-x-[-50%] translate-y-[-50%] left-0 right-0 top-0 flex items-center justify-center" 
            style={{
                left: smoothMouse.x,
                top:  smoothMouse.y
            }}      

            variants={variants}
            animate={cursorType}

        >
            <span className='text-white text-sm tracking-wider'>{cursorText}</span>
        </motion.div>  
);
};

export default CursorFollower;