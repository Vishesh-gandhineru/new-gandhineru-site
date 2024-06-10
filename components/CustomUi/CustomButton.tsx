import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/CustomIcons";

import Link from "next/link";

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string | "#";
};

export function PrimaryButton({ children, href }: PrimaryButtonProps) {
  return (
    <div>
      <Button variant="Primary" asChild className="relative group">
        <Link href={href ? href : "#"}>
          <span>{children}</span>{" "}
          <span className="absolute top-1/2 left-[100%] group-hover:left-[105%] group-hover:rotate-[-45deg] transition-all ease-in-out duration-300 -translate-y-1/2 bg-primary w-[40px] rounded-full h-full grid place-content-center">
            <ArrowRight />
          </span>
        </Link>
      </Button>
    </div>
  );
}
