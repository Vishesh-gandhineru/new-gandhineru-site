"use client"

import {  motion } from "framer-motion";


export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionButton = motion.button;

export const FadeInDiv = ({ children , className , ...props } : {children : React.ReactNode , className:string}) => {
    return (
        <MotionDiv
        initial={{ opacity: 0 , y:100 }}
        whileInView={{ opacity: 1 , y:0 }}
        transition={{ duration: 0.5 , ease: "easeInOut" , type:"spring"}}
        viewport={{once: true}}
        className={className}
        {...props}
        >
        {children}
        </MotionDiv>
    );
}


export const FadeInSection = ({ children , className , ...props } : {children : React.ReactNode , className:string}) => {
    return (
        <MotionSection
        initial={{ opacity: 0 , y:100 }}
        whileInView={{ opacity: 1 , y:0 }}
        transition={{ duration: 0.5 , ease: "easeInOut" , type:"spring"}}
        viewport={{once: true}}
        className={className}
        {...props}
        >
        {children}
        </MotionSection>
    );
}