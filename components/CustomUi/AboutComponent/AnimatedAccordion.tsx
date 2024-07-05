"use client";

import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/CustomIcons";

type AccordionContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
};

export const AnimatedAccordion = ({ children , className }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={`w-full ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

type AccordionHeaderProps = {
  bgImage: string;
  className?: string;
};

export const AnimatedAccordionHeader = ({
  children,
  bgImage,
  className,
}: AccordionProps & AccordionHeaderProps) => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "AnimatedAccordionHeader must be used within an AnimatedAccordion"
    );
  }

  const { isOpen, setIsOpen } = context;

  return (
    <div
      className={cn(
        "border-[1px] py-5 pr-40 md:pr-20 pl-5 rounded-[20px] text-start relative overflow-hidden z-10 cursor-pointer bg-white",
        [className],
        isOpen ? "text-white" : "text-black"
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <motion.div
        initial={{
          opacity: 1,
          width: "80px",
          height: "80px",
          borderRadius: "100%",
          top: "50%",
          right: "0%",
          x: "0px",
          y: "-30%",
        }}
        animate={{
          width: isOpen ? "100%" : "80px",
          height: isOpen ? "100%" : "80px",
          borderRadius: isOpen ? "20px" : "100%",
          top: isOpen ? "0%" : "50%",
          right: isOpen ? "-50%" : "0%",
          x: isOpen ? "-50%" : "0px",
          y: isOpen ? "0px" : "-30%",
        }}

        transition={{duration : 0.2 , ease : "circInOut"}}

        className={cn(
          " bg-cover bg-center bg-no-repeat h-full w-full bg-red-300 absolute z-[-1]",
          [bgImage ? bgImage : "transparent"]
        )}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className="w-[30px] h-[30px] grid place-content-center rounded-full bg-[#373737c4] rotate-[-45deg] absolute top-1/2 right-5 translate-y-[-50%]"
      >
        <ArrowRight />
      </motion.span>
    </div>
  );
};

export const AnimatedAccordionContent = ({ children , className }: AccordionProps) => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "AnimatedAccordionContent must be used within an AnimatedAccordion"
    );
  }

  const { isOpen } = context;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 1 }}
        animate={{ y: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }}
        className={cn("overflow-hidden border-[1px] py-8 pr-10 pl-5 rounded-[20px] h-fit text-start relative text-base z-1 text-wrap", [className])}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
