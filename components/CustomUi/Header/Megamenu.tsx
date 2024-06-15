"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./MegaMenuStyle.css";
import { ArrowRight } from "@/components/CustomIcons";
import Link from "next/link";
type MegamenuProps = {
  isActive: boolean;
};

const Megamenu = ({ isActive }: MegamenuProps) => {
  const variants = {
    open: {
      width: "100vw",
      height: 700,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      borderRadius: "20px 20px 20px 20px",
      top: "-5px",
      right: "-35px",
    },
    close: {
      width: 20,
      height: 20,
      transition: { delay : 0.1 , duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      borderRadius: "2000px 200px 2000px 2000px",
      padding: 0,
    },
  };

  const BgVariants = {
    open: {
        width : "100%",
        height : 700,
        transition: { delay : 0.1 ,duration: 0.75, ease: [0.76, 0, 0.24, 1] },
        borderRadius: "20px 20px 20px 20px",
    
      },
      close: {
        width: 20,
        height: 20,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
        borderRadius: "2000px 20px 2000px 2000px",
        padding: 0,
      },
  }

 
  
  return (
    <motion.section
      initial="close"
      animate={isActive ? "open" : "close"}
      variants={variants}
      className="container right-2 top-2 bg-primary py-8 absolute z-[999]"
    >    
    <motion.div 
    initial="close"
      animate={isActive ? "open" : "close"}
      variants={BgVariants} 
      className="bgcover w-full h-full bg-MegaMenu-bg bg-no-repeat bg-cover rounded-[20px] absolute z-[-1] right-0 top-0"></motion.div>   
      <div className="container py-8 h-full flex flex-col justify-end">
        <AnimatePresence>
        {isActive && <MegaMenuContent />}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Megamenu;

export function MegaMenuContent() {

 
    const MenuContentVariant = {
        initial: {
            opacity: 0
        } ,
        enter: {
            opacity: 1,
            transition : {delay : 0.6}
        } , 
        exit : {
            opacity: 0
        }
    }

    const navItems = [
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Work",
            link: "/work",
        },
        {
            title: "Service",
            link: "/services",
        },
        {
            title: "Resources",
            link: "/resources",
        },
        {
            title: "Contact",
            link: "/contact",
        }
    ]

    const MenuBoxVariant = {
        initial: {
            opacity: 0,
          
        } ,
        enter: (i : number) => ({
           
            opacity: 1,
            transition : {delay : 0.5 + (i * 0.1)}
        }) , 
        exit : {
            opacity: 0,
       
        }
    }

  return (
    <motion.div 
    variants={MenuContentVariant}
    initial='initial'
    animate='enter'
    exit='exit'   
    className="text-white" 
    >
  

      <nav className=" border-[1px] rounded-[20px] border-white grid grid-cols-5 overflow-hidden mb-5">
        {navItems.map((item, i) => {
            return (               

                <motion.div variants={MenuBoxVariant} initial="initial" 
                custom={i}
                animate="enter" exit="exit"
                key={i} className="MenuBox">
                    <Link href={item.link}>
                    <h1>{item.title}</h1>
                    </Link>
                </motion.div>
             
            
            )
        })}             
      </nav>
      <div className="grid grid-cols-2">
        <div className=" border-[1px] border-[#939393] bg-white rounded-[20px] text-primary py-[20px] px-[30px] flex justify-between items-center">
        <p className=" font-Syne text-[20px] leading-[24px]">Book a Clarity Call</p>
        <ArrowRight className="blackArrow scale-150" />
        </div>
        <div className=" border-[1px] border-primary bg-white rounded-[20px] text-primary py-[20px] px-[30px] flex justify-between items-center">
        <p className=" font-Syne text-[20px] leading-[24px]">Book a Clarity Call</p>
        <ArrowRight className="blackArrow scale-150" />
        </div>
      </div>

    </motion.div>
  );
}
