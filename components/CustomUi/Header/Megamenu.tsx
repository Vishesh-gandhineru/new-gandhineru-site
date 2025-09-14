"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./MegaMenuStyle.css";
import { ArrowRight } from "@/components/CustomIcons";
import TransitionLink from "@/components/Animations/TransitionLink";
import useWindowSize from "@/hooks/useWindowsize";
import Link from "next/link";
import { navItems } from "./NavItems";
type MegamenuProps = {
  isActive: boolean;
};

const Megamenu = ({ isActive }: MegamenuProps) => {
  const { width: windowWidth } = useWindowSize();
  const variants = {
    open: {
      width:
        windowWidth > 1200
          ? "calc(100vw)"
          : windowWidth > 880
          ? "calc(100vw - 60px)"
          : windowWidth > 600
          ? "calc(100vw - 50px)"
          : "calc(100vw -  15px)",
      height:
        windowWidth > 1200 ? "700px" : windowWidth > 600 ? "90vh" : "98vh",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      borderRadius: "20px",
      top: "-20px",
      right:
        windowWidth > 1200
          ? "-50px"
          : windowWidth > 880
          ? "-50px"
          : windowWidth > 768
          ? "-45px"
          : "-25px",
    },
    close: {
      width: 20,
      height: 20,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      borderRadius: "20px",
      padding: 0,
    },
  };

  const BgVariants = {
    open: {
      width: "100%",
      height:
        windowWidth > 1200 ? "700px" : windowWidth > 600 ? "90vh" : "98vh",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      borderRadius: "20px",
    },
    close: {
      width: 20,
      height: 20,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      borderRadius: "20px",
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
      <div className="container py-0 md:py-8 h-full flex flex-col justify-end">
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
      className="text-white p-5"
    >
      <nav className=" border-[1px] rounded-[20px] border-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 overflow-hidden mb-5">
        {navItems.map((item, i) => {
          return (
            <motion.div
              variants={MenuBoxVariant}
              initial="initial"
              custom={i}
              animate="enter"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
              key={i}
              layout
              className="MenuBox justify-end transition-all ease-out duration-300 h-fit py-5 px-6 md:h-[230px] md:last:h-fit xl:last:h-full lg:h-[280px] lg:p-[30px] xl:h-[400px] border-b-[1px] border-r-[1px] col-span-2 md:col-span-1 xl:col-span-1 last:col-span-2 xl:last:col-span-1 group"
            >
              <TransitionLink href={item.link} className="w-fit">
                <h3 className="w-fit">{item.title}</h3>
              </TransitionLink>
              <div className="hidden group-hover:flex group-hover:flex-wrap  group-hover:gap-y-1 lg:gap-12  xl:group-hover:flex-col lg:mt-4 ">
                {item.subMenu &&
                  item.subMenu.map((subItem, i) => {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex justify-between group/submenu items-center"
                      >
                        <TransitionLink href={subItem.link}>
                          <h4 className="text-[16px] lg:text-[20px] group-hover/submenu:font-medium">
                            {subItem.title}
                          </h4>
                        </TransitionLink>
                        <ArrowRight className="scale-150 opacity-0 md:group-hover/submenu:opacity-100 transition-all ease-in-out duration-300" />
                      </motion.div>
                    );
                  })}
              </div>
            </motion.div>
          );
        })}
      </nav>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <TransitionLink
          href="/contact"
          className=" border-[1px] border-[#939393] bg-white rounded-[15px] md:rounded-[20px] text-primary py-[10px] md:py-[20px] px-[30px] flex justify-between items-center"
        >
          <p className=" font-Syne text-[16px] md:text-[20px] leading-[24px]">
            Book a Clarity Call
          </p>
          <ArrowRight className="blackArrow scale-125 md:scale-150" />
        </TransitionLink>
        <div className=" border-[1px] border-[#939393] bg-white rounded-[15px] md:rounded-[20px] text-[#868686] text-[14px]  md:text-base font-Satoshi py-[10px] md:py-[20px] px-4 md:px-[30px] flex justify-between items-center">
          <a
            className="hover:text-primary"
            href="https://www.instagram.com/gandhineru/?hl=en"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="hover:text-primary"
            href="https://in.linkedin.com/company/gandhi-neru"
            target="_blank"
          >
            LinkedIn
          </a>
          <a className="hover:text-primary" href="#" target="_blank">
            Behance
          </a>
          <a
            className="hover:text-primary"
            href="https://www.facebook.com/gandhineruofficial/"
            target="_blank"
          >
            Facebook
          </a>
        </div>
      </div>
    </motion.div>
  );
}
