import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/CustomIcons";
import { cn } from "@/lib/utils";
import TransitionLink from "../Animations/TransitionLink";

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
  iconColor,
  icon,
  type,
}: PrimaryButtonProps & globalsButtonProps) {
  return (
    <>
      <svg
        width="0"
        height="0"
        className="absolute hidden"
        colorInterpolationFilters="sRGB"
      >
        <defs>
          <filter id="buttonFilter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="7"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="buttonFilter"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="buttonFilter"
              operator="atop"
            ></feComposite>
            <feBlend in="SourceGraphic" in2="buttonFilter"></feBlend>
          </filter>
        </defs>
      </svg>

      <Button
        variant="Primary"
        type={type}
        asChild
        className={cn(
          "relative group px-5 mr-[40px] md:py-2 md:px-6",
          className
        )}
        style={{ filter: "url(#buttonFilter)" }}
      >
        <TransitionLink href={href ? href : "#"}>
          <span>{children}</span>
          <span
            className={cn(
              "absolute top-1/2 left-[100%] group-hover:left-[calc(100%+10px)] group-hover:rotate-[-45deg] transition-all ease-in-out duration-300 -translate-y-1/2 bg-inherit before:bg-inherit w-[40px] rounded-full h-full grid place-content-center",
              iconClassName
            )}
          >
            {icon ? (
              icon
            ) : (
              <ArrowRight className={iconColor ? iconColor : ""} />
            )}
          </span>
        </TransitionLink>
      </Button>
    </>
  );
}

export function SecondaryButton({
  children,
  href,
  className,
  arrowColor = "blackArrow",
}: globalsButtonProps & { arrowColor?: string }) {
  return (
    <Button
      variant="secondary"
      size="secondary"
      asChild
      className={cn("SecondaryButton relative group mr-[30px]", [className])}
    >
      <TransitionLink href={href ? href : "#"}>
        {children}
        <span className="absolute top-1/2 left-[100%] group-hover:left-[105%] group-hover:rotate-[-45deg] transition-all ease-in-out duration-300 -translate-y-1/2  w-[40px] h-full grid place-content-center">
          <ArrowRight className={arrowColor} />
        </span>
      </TransitionLink>
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
      <a href={href ? href : "#"} target="_blank">
        <span className="z-[10]"> {children}</span>
        <span className="SocialButtonBG group-hover:opacity-100 transition-all ease-in-out duration-300"></span>
      </a>
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
  className,
}: globalsButtonProps & ContactButtonProps) {
  return (
    <>
      <svg
        width="0"
        height="0"
        className="absolute hidden"
        colorInterpolationFilters="sRGB"
      >
        <defs>
          <filter id="SocialbuttonFilter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="7"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="SocialbuttonFilter"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="SocialbuttonFilter"
              operator="atop"
            ></feComposite>
            <feBlend in="SourceGraphic" in2="SocialbuttonFilter"></feBlend>
          </filter>
        </defs>
      </svg>

      <Button
        variant="Primary"
        asChild
        className={cn("relative group px-5  md:py-2 md:px-3", className)}
        style={{ filter: "url(#SocialbuttonFilter)" }}
      >
        <TransitionLink href={href ? href : "#"}>
          <span
            className={cn(
              "absolute top-1/2 right-[100%] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 -translate-y-1/2 bg-inherit before:bg-inherit w-[calc(100%+80px)] rounded-full h-full grid place-content-center"
            )}
          >
            {children}
          </span>
          <span className="w-fit h-fit">{icon ? icon : <ArrowRight />}</span>
        </TransitionLink>
      </Button>
    </>
  );
}
