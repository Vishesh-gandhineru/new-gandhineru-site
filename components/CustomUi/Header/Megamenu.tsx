"use client";
import React, { useState } from "react";
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
      transition: { delay: 0.1, duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      borderRadius: "2000px 200px 2000px 2000px",
      padding: 0,
    },
  };

  const BgVariants = {
    open: {
      width: "100%",
      height: 700,
      transition: { delay: 0.1, duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      borderRadius: "20px 20px 20px 20px",
    },
    close: {
      width: 20,
      height: 20,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      borderRadius: "2000px 20px 2000px 2000px",
      padding: 0,
    },
  };

  return (
    <motion.section
      initial="close"
      animate={isActive ? "open" : "close"}
      variants={variants}
      className="container m-auto right-2 top-2 bg-primary py-8 absolute z-[999]"
    >
      <motion.div
        initial="close"
        animate={isActive ? "open" : "close"}
        variants={BgVariants}
        className="bgcover w-full h-full bg-MegaMenu-bg bg-no-repeat bg-cover rounded-[20px] absolute z-[-1] right-0 top-0"
      ></motion.div>
      <div className="container py-8 h-full flex flex-col justify-end">
        <AnimatePresence>{isActive && <MegaMenuContent />}</AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Megamenu;

export function MegaMenuContent() {

 const [menuIsHoverd, setMenuIsHoverd] = useState(false);

  const MenuContentVariant = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { delay: 0.6 },
    },
    exit: {
      opacity: 0,
    },
  };

  const navItems = [
    {
      title: "About",
      link: "/about",
      subMenu: [
        {
          title: "Our Story",
          link: "/about/#our-story",
        },
        {
          title: "Our Team",
          link: "/about/#our-team",
        },
        {
          title: "Our Values",
          link: "/about/#our-values",
        },
      ],
    },
    {
      title: "Work",
      link: "/work",
      subMenu: [
        {
          title: "Our Story",
          link: "/work/#our-story",
        },
        {
          title: "Our Team",
          link: "/work/#our-team",
        },
        {
          title: "Our Values",
          link: "/work/#our-values",
        },
      ],
    },
    {
      title: "Service",
      link: "/services",
      subMenu: [
        {
          title: "Our Story",
          link: "/services/#our-story",
        },
        {
          title: "Our Team",
          link: "/services/#our-team",
        },
        {
          title: "Our Values",
          link: "/services/#our-values",
        },
      ],
    },
    {
      title: "Resources",
      link: "/blogs",
      subMenu: [
        {
          title: "Our Story",
          link: "/blogs/#our-story",
        },
      ],
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const MenuBoxVariant = {
    initial: {
      opacity: 0,
    },
    enter: (i: number) => ({
      opacity: 1,
      transition: { delay: 0.5 + i * 0.1 },
    }),
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={MenuContentVariant}
      initial="initial"
      animate="enter"
      exit="exit"
      className="text-white"
    >
      <nav className=" border-[1px] rounded-[20px] border-white grid grid-cols-2 lg:grid-cols-5 overflow-hidden mb-5">
        {navItems.map((item, i) => {
          return (
            <motion.div
              variants={MenuBoxVariant}
              initial="initial"
              custom={i}
              animate="enter"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key={i}
              layout
              className="MenuBox justify-end hover:justify-start transition-all ease-out duration-300 h-[100px] lg:h-[400px] border-b-[1px] border-r-[1px] last:col-span-2 lg:last:col-span-1 group"
            >
              <Link href={item.link}>
                <h3>{item.title}</h3>
              </Link>
              <div className="hidden group-hover:block">
                {item.subMenu &&
                  item.subMenu.map((subItem, i) => {
                    return (
                      <motion.div key={i}
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{duration: 0.5 , delay:i * 0.1}}
                      
                      >
                      <Link href={subItem.link}>
                        <h4>{subItem.title}</h4>
                      </Link>
                      </motion.div>
                    );
                  })}
              </div>
            </motion.div>
          );
        })}
      </nav>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className=" border-[1px] border-[#939393] bg-white rounded-[20px] text-primary py-[20px] px-[30px] flex justify-between items-center">
          <p className=" font-Syne text-[20px] leading-[24px]">
            Book a Clarity Call
          </p>
          <ArrowRight className="blackArrow scale-150" />
        </div>
        <div className=" border-[1px] border-[#939393] bg-white rounded-[20px] text-[#868686]  text-base font-Satoshi py-[20px] px-[30px] flex justify-between items-center">
          <Link className="hover:text-primary" href="#">
            Instagram
          </Link>
          <Link className="hover:text-primary" href="#">
            LinkedIn
          </Link>
          <Link className="hover:text-primary" href="#">
            Behance
          </Link>
          <Link className="hover:text-primary" href="#">
            Facebook
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
