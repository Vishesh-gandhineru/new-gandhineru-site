import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  SocialButton,
} from "@/components/CustomUi/CustomButton";
import HeroBanner from "@/components/CustomUi/HeroBanner";


const page = () => {
  return (
    <section>
      <HeroBanner
        className=" bg-hero-home-banner flex items-center h-[640px] container m-auto p-8 lg:p-12"
        buttonText="Build your Brand"
      >
        <div className="lg:w-[60%] flex flex-col gap-[80px]">
          <div className="flex flex-col gap-3 lg:gap-8">
          <h1 className="text-[36px] leading-[46px] lg:text-[72px] lg:leading-[82px] normal-case">Simply put, we design and build brands</h1>
          <p className=" text-2xl">Driven by visuals, tech and automation</p>
          </div>
          <div className="flex gap-12">
            <PrimaryButton className="to-[#F7DB85] bg-white text-primary text-base" iconClassName="bg-white before:bg-white" iconColor="blackArrow" href="/about">
            Case Studies
            </PrimaryButton>
            <SecondaryButton href="/services" className="text-base">View Services</SecondaryButton>
           
          </div>
        </div>
      </HeroBanner>

      <div className="container">
        <h1>hello</h1>
      </div>
    </section>
  );
};

export default page;
