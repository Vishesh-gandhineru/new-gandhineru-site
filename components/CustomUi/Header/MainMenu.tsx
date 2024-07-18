import React from "react";
import { LogoBlack } from "@/components/CustomIcons";
import MenuButton from "./MenuButton";
import { ContactButton, PrimaryButton } from "../CustomButton";
import { ContactIcon } from "@/components/CustomIcons";
import Link from "next/link";
import StickyMenu from "./StickyMenu";
import TransitionLink from "@/components/Animations/TransitionLink";

const MainMenu = () => {
  return (
    <header className="sticky top-0 pb-4 pt-8 mb-[-80px] z-50 max-w-[1300px] xl:max-w-[1400px] w-[90%] xl:w-full mx-auto xl:px-14">
      <StickyMenu className=" absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full m-auto z-[-1]" />
      <div className="flex justify-between items-center z-30">
        <div className="Logo">
          <TransitionLink href="/">
            <LogoBlack className="h-full w-[150px] md:w-[200px]" />
          </TransitionLink>
        </div>
        <div className="flex justify-center items-start gap-3">
          <ContactButton icon={<ContactIcon />} href="/contact" className=" hidden md:flex">
            Lets Chat?
          </ContactButton>
         
          <MenuButton />
        </div>
      </div>
    </header>
  );
};

export default MainMenu;
