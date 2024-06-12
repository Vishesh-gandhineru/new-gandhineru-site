
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/CustomIcons";
import { cn } from "@/lib/utils";

import Link from "next/link";

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string | "#";
  className?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

export function PrimaryButton({ children, href , className , icon , type }: PrimaryButtonProps) {
 
 
  return (
      <Button variant="Primary"  type={type} asChild className={`relative group primaryButton mr-[40px] before:bg-gradient-to-b after:bg-gradient-to-t from-transparent from-80% to-50% to-current ${className}` }>
        <Link href={href ? href : "#"}>
          <span>{children}</span>
          <span className=" PrimaryButtonArrow absolute top-1/2 left-[100%] group-hover:left-[105%] group-hover:rotate-[-45deg] transition-all ease-in-out duration-300 -translate-y-1/2 bg-primary w-[40px] rounded-full h-full grid place-content-center">
           {icon ? icon : <ArrowRight  />}
          </span>
        </Link>
      </Button>
  );
}


type SecondaryButtonProps = {
  children: React.ReactNode;
  href?: string;
};



export function SecondaryButton({children , href} : SecondaryButtonProps) {
  return (
    <Button variant="secondary" size="secondary" asChild className="SecondaryButton relative group mr-[30px]">
      <Link href={href ? href : "#"}>
     {children} <span className="absolute top-1/2 left-[100%] group-hover:left-[105%] group-hover:rotate-[-45deg] transition-all ease-in-out duration-300 -translate-y-1/2  w-[40px] h-full grid place-content-center"> <ArrowRight className="blackArrow"/></span>
      </Link>
    </Button>
  )
}

type SocialButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export function SocialButton({children , href , className} : SocialButtonProps) {
  return (
    <Button variant="social" asChild className={` relative  group overflow-hidden SocialButton bg-cover repeat-0 hover:text-white transition-all ease-in-out duration-300 ${className}`}>
      <Link href={href ? href : "#"}>{children} <span className="SocialButtonBG group-hover:opacity-100 transition-all ease-in-out duration-300"></span></Link>      
    </Button>
  )
}