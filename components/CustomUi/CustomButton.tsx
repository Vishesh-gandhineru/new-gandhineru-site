"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/CustomIcons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import Link from "next/link";

type globalsButtonProps = {
  children: React.ReactNode;
  href?: string | "#";
  className?: string;
};

type PrimaryButtonProps = {
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

export function PrimaryButton({
  children,
  href,
  className,
  icon,
  type,
}: PrimaryButtonProps & globalsButtonProps) {
  return (
    <Button
      variant="Primary"
      type={type}
      asChild
      className={`relative group primaryButton mr-[40px] before:bg-gradient-to-b after:bg-gradient-to-t from-transparent from-80% to-50% to-current ${className}`}
    >
      <Link href={href ? href : "#"}>
        <span>{children}</span>
        <span className=" PrimaryButtonArrow absolute top-1/2 left-[100%] group-hover:left-[105%] group-hover:rotate-[-45deg] transition-all ease-in-out duration-300 -translate-y-1/2 bg-primary w-[40px] rounded-full h-full grid place-content-center">
          {icon ? icon : <ArrowRight />}
        </span>
      </Link>
    </Button>
  );
}

export function SecondaryButton({ children, href }: globalsButtonProps) {
  return (
    <Button
      variant="secondary"
      size="secondary"
      asChild
      className="SecondaryButton relative group mr-[30px]"
    >
      <Link href={href ? href : "#"}>
        {children}{" "}
        <span className="absolute top-1/2 left-[100%] group-hover:left-[105%] group-hover:rotate-[-45deg] transition-all ease-in-out duration-300 -translate-y-1/2  w-[40px] h-full grid place-content-center">
          {" "}
          <ArrowRight className="blackArrow" />
        </span>
      </Link>
    </Button>
  );
}

export function SocialButton({
  children,
  href,
  className,
}: globalsButtonProps) {
  return (
    <Button
      variant="social"
      asChild
      className={` relative  group overflow-hidden SocialButton bg-cover repeat-0 hover:text-white transition-all ease-in-out duration-300 ${className}`}
    >
      <Link href={href ? href : "#"}>
        {children}{" "}
        <span className="SocialButtonBG group-hover:opacity-100 transition-all ease-in-out duration-300"></span>
      </Link>
    </Button>
  );
}

type ContactButtonProps = {
  icon?: React.ReactNode;
};





export function ContactButton({
  children,
  href,
  icon,
}: globalsButtonProps & ContactButtonProps) {

  return (
    <Button asChild className=" relative">
      <Link
        href={href ? href : "#"}
        className="w-[40px] h-[40px] before:left-[-10px] after:left-[-10px] relative py-0 px-0 md:px-0 primaryButton before:bg-gradient-to-b after:bg-gradient-to-t from-transparent from-80% to-50% to-current"
      >
        <span>{icon}</span>
        <motion.span 
        className="PrimaryButtonArrow ContactButtonBox opacity-0 before:right-[-10px]  bg-primary absolute right-full top-[50%] translate-y-[-50%] w-fit h-[40px] flex items-center justify-center px-4 rounded-full transition-all ease-in-out duration-300">
          {children}
        </motion.span>
      </Link>
    </Button>
  );
}
