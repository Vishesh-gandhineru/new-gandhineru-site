import React from "react";
import { LogoBlack } from "@/components/CustomIcons";
import MenuIcon from "./MenuIcon";
import { ContactButton } from "../CustomButton";
import { ContactIcon } from "@/components/CustomIcons";

const MainMenu = () => {
  return (
    <div className="container my-3 flex justify-between items-center">
      <div className="Logo">
        <LogoBlack />
      </div>
      <div className="flex justify-center items-center gap-3">
        <ContactButton icon={<ContactIcon />}>Lets Chat?</ContactButton>
      <MenuIcon />
      </div>
    </div>
  );
};

export default MainMenu;
