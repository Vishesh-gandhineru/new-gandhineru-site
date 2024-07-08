import { cn } from "@/lib/utils";
import React from "react";
import { SecondaryButton } from "./CustomButton";

type HeroBannerProps = {
  children?: React.ReactNode;
  className?: string;
  buttonText?: string;
  style?: React.CSSProperties;
  buttonHref: string;
};

const HeroBanner = ({
  children,
  className,
  buttonText,
  style,
  buttonHref,
}: HeroBannerProps) => {
  return (
    <section
      className={cn(
        "h-[350px] container capitalize rounded-[20px] p-6 relative bg-cover bg-center bg-no-repeat",
        [className]
      )}
      style={style}
    >
      {children}{" "}
      <div className="HeroBannerButton px-6 pt-2 rounded-t-[15px]  absolute bottom-0 left-[50%] translate-x-[-50%] bg-white">
        <SecondaryButton href={buttonHref ? buttonHref : "#"}>
          {buttonText ? buttonText : "Book a Clarity Call"}
        </SecondaryButton>
      </div>
    </section>
  );
};

export default HeroBanner;
