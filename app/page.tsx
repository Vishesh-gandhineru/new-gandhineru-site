import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  SocialButton,
} from "@/components/CustomUi/CustomButton";
import HeroBanner from "@/components/CustomUi/HeroBanner";
import AnimatedLogoBanner from "@/components/CustomUi/HomeComponent/AnimatedLogoBanner";
import TestimonialCard from "@/components/CustomUi/HomeComponent/TestimonialCard";
import Heading from "@/components/CustomUi/Heading";
import ServiceCards from "@/components/CustomUi/ServiceCard";
import BlogCarousel from "@/components/CustomUi/BlogComponent/BlogCarousel";

const page = () => {
  return (
    <main>
      <HeroBanner
        className=" bg-hero-home-banner flex items-center h-[640px] container m-auto p-8 lg:p-12"
        buttonText="Build your Brand"
      >
        <div className="lg:w-[60%] flex flex-col gap-[80px]">
          <div className="flex flex-col gap-3 lg:gap-8">
            <h1 className="normal-case">
              Simply put, we design and build brands
            </h1>
            <p className=" text-2xl">Driven by visuals, tech and automation</p>
          </div>
          <div className="flex gap-12">
            <PrimaryButton
              className="to-[#F7DB85]  bg-white text-primary text-base"
              iconClassName="bg-white before:bg-white"
              iconColor="blackArrow"
              href="/about"
            >
              Case Studies
            </PrimaryButton>
            <SecondaryButton href="/services" className="text-base">
              View Services
            </SecondaryButton>
          </div>
        </div>
      </HeroBanner>

      <section className="sectionContainer flex flex-col gap-[80px] ">
        <AnimatedLogoBanner />
      </section>
      <section className="sectionContainer flex justify-between items-center w-[1300px]">
        <Heading
          Heading="Trust earned the right way"
          subHeading="Thanks for rolling the dice on us"
        />
        <div className="w-[60%]">
          <TestimonialCard />
        </div>
      </section>
      <section className="sectionContainer">
        <ServiceCards />
      </section>
      <section className="sectionContainer flex gap-5">        
          <BlogCarousel />
      </section>
    </main>
  );
};

export default page;
