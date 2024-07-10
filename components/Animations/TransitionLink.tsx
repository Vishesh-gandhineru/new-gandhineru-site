"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import {  usePageAnimation } from "@/store/usePageAnimation";
import { set } from "zod";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface TransitionLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const TransitionLink = ({ href, children, className , ...props }: TransitionLinkProps) => {
  const router = useRouter();
  const path = usePathname();
 const {setStartAnimation} = usePageAnimation()
const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
 
    if (path === href) {
      return;
    }

    setStartAnimation(true)
    await sleep(1000);
    router.push(href); 
    await sleep(100);
    setStartAnimation(false)           
  };



 return (
    <Link href={href} {...props} className={className} onClick={handleTransition}>
      {children}
    </Link>
  );
};

export default TransitionLink;
