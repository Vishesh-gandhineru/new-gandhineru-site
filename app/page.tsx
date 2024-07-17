import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/CustomUi/CustomButton";
import HeroBanner from "@/components/CustomUi/HeroBanner";
import AnimatedLogoBanner from "@/components/CustomUi/HomeComponent/AnimatedLogoBanner";
import TestimonialCard from "@/components/CustomUi/HomeComponent/TestimonialCard";
import Heading from "@/components/CustomUi/Heading";
import BlogCarousel from "@/components/CustomUi/BlogComponent/BlogCarousel";
import Work from "@/components/CustomUi/HomeComponent/Work";
import ServiceCardSection from "@/components/CustomUi/ServiceComponent/ServiceCardSection";
import { MotionDiv , MotionSection , FadeInDiv , FadeInSection } from "@/components/CustomUi/MotionDiv";
import { Skeleton } from "@/components/ui/skeleton";



const page = async () => {
  
  return (
    <main>
      <HeroBanner
        buttonHref="/services"
        className=" bg-hero-home-mob-banner bg-bottom md:bg-center  md:bg-hero-home-banner flex items-center h-[550px] md:h-[500px] lg:h-[640px] container m-auto p-5 md:p-8 lg:p-12"
        buttonText="Build your Brand"
      >
        <FadeInDiv 
        className="w-full h-full pt-[90px] md:pt-[50px] pb-[50px] justify-between md:justify-end lg:justify-center md:w-[80%] lg:w-[60%] flex flex-col gap-[80px]">
          <div className="flex flex-col gap-3 lg:gap-8">
            <h1 className="normal-case">
              Simply put, we design and build brands
            </h1>
            <p className=" text-base lg:text-2xl">Driven by visuals, tech and automation</p>
          </div>
          <div className="flex justify-between md:justify-start md:gap-12">
            <PrimaryButton
              className="bg-white text-primary text-[12px] md:text-base "
              iconClassName="bg-white before:bg-white"
              iconColor="blackArrow"
              href="/about"
            >
              Case Studies
            </PrimaryButton>
            <SecondaryButton href="/services" className="text-[12px] md:text-base">
              View Services
            </SecondaryButton>
          </div>
        </FadeInDiv>
      </HeroBanner>

      <FadeInSection
      className=" py-16 w-full xl:max-w-[1300px] mx-auto my-[20px] flex flex-col gap-[80px]">
        <AnimatedLogoBanner />
      </FadeInSection>
      <FadeInSection 
      className="sectionContainer w-full md:max-w-[1000px]">
        <Work />
      </FadeInSection>
      <FadeInSection className="sectionContainer flex flex-col lg:flex-row gap-5 md-flex-row justify-between items-start md:items-center space-y-8">
        <Heading
          Heading="Trust earned the right way"
          subHeading="Thanks for rolling the dice on us"
        />
        <div className="w-full md:w-[60%]">
          <TestimonialCard />
        </div>
      </FadeInSection>
      <FadeInSection className="sectionContainer flex-col flex gap-[80px]">
        <Heading
          Heading="Our Services"
          subHeading="A Toolkit of Insight, Intuition & Tech"
        />
        <ServiceCardSection />
      </FadeInSection>
      <FadeInSection className="sectionContainer flex gap-5">        
          <BlogCarousel />
      </FadeInSection>

     
    </main>
  );
};

export default page;
