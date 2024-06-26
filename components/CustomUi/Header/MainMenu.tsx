import React from "react";
import { LogoBlack } from "@/components/CustomIcons";
import MenuButton from "./MenuButton";
import { ContactButton } from "../CustomButton";
import { ContactIcon } from "@/components/CustomIcons";
import Link from "next/link";

const MainMenu = () => {
  return (
    <header className="sticky top-0 pb-4 pt-8 z-50 container">
      <div className=" absolute bg-white w-screen h-full top-0 left-[50%] translate-x-[-50%] z-[-1]" />
      <div className="flex justify-between items-center z-30">
      <div className="Logo">
        <Link href="/">
        <LogoBlack />
        </Link>
      </div>
      <div className="flex justify-center items-start gap-3">
        <ContactButton icon={<ContactIcon />} className=" hidden md:flex">Lets Chat?</ContactButton>
      <MenuButton />
      </div>
      </div>
    </header>
  );
};

export default MainMenu;
