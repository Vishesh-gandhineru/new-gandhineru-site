import React from "react";
import { LogoBlack } from "@/components/CustomIcons";
import MenuButton from "./MenuButton";
import { ContactButton } from "../CustomButton";
import { ContactIcon } from "@/components/CustomIcons";
import Link from "next/link";

const MainMenu = () => {
  return (
    <header className="my-3 flex justify-between items-center sticky top-0 py-3 bg-white z-50">
      <div className="Logo">
        <Link href="/">
        <LogoBlack />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-3">
        <ContactButton icon={<ContactIcon />}>Lets Chat?</ContactButton>
      <MenuButton />
      </div>
    </header>
  );
};

export default MainMenu;
