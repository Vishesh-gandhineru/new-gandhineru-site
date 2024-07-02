

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/CustomIcons";


import Link from "next/link";
import { cn } from "@/lib/utils";

type globalsButtonProps = {
  children: React.ReactNode;
  href?: string | "#";
  className?: string;
};

type PrimaryButtonProps = {
  icon?: React.ReactNode;
  iconClassName?: string;
  iconColor?: string;
  type?: "button" | "submit" | "reset";
};

export function PrimaryButton({
  children,
  href,
  className,
  iconClassName,
  iconColor , 
  icon,
  type,
}: PrimaryButtonProps & globalsButtonProps) {
  return (
    <Button
      variant="Primary"
      type={type}
      asChild
      className={cn("relative group primaryButton mr-[40px] px-5 md:py-2 md:px-8 before:bg-gradient-to-b after:bg-gradient-to-t from-transparent from-80% to-50% to-current" , [className] )}
    >
      <Link href={href ? href : "#"}>
        <span>{children}</span>
        <span className={cn("PrimaryButtonArrow absolute top-1/2 left-[100%] group-hover:left-[105%] group-hover:rotate-[-45deg] transition-all ease-in-out duration-300 -translate-y-1/2 bg-inherit before:bg-inherit w-[40px] rounded-full h-full grid place-content-center" , [
          iconClassName
        
        ])}>
          {icon ? icon : <ArrowRight className={iconColor ? iconColor : ""} />}
        </span>
      </Link>
    </Button>
  );
}

export function SecondaryButton({ children, href , className , arrowColor = "blackArrow" }: globalsButtonProps & { arrowColor?: string }) {
  return (
    <Button
      variant="secondary"
      size="secondary"
      asChild
      className={cn("SecondaryButton relative group mr-[30px]" , [className])}
    >
      <Link href={href ? href : "#"}>
        {children}{" "}
        <span className="absolute top-1/2 left-[100%] group-hover:left-[105%] group-hover:rotate-[-45deg] transition-all ease-in-out duration-300 -translate-y-1/2  w-[40px] h-full grid place-content-center">
          {" "}
          <ArrowRight className={arrowColor} />
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
        <span className="z-[10]"> {children}</span>
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
  className
}: globalsButtonProps & ContactButtonProps) {

  return (
    <Button asChild className={cn("relative", [className] )}>
      <Link
        href={href ? href : "#"}
        className="w-[40px] h-[40px] before:left-[-10px] after:left-[-10px] relative py-0 px-0 md:px-0 primaryButton before:bg-gradient-to-b after:bg-gradient-to-t from-transparent from-80% to-50% to-current"
      >
        <span>{icon}</span>
        <span 
        className="PrimaryButtonArrow ContactButtonBox opacity-0 before:right-[-10px]  bg-primary absolute right-full top-[50%] translate-y-[-50%] w-fit h-[40px] flex items-center justify-center px-4 rounded-full transition-all ease-in-out duration-300">
          {children}
        </span>
      </Link>
    </Button>
  );
}
