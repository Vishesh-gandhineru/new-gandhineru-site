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
import BlogCarousel from "@/components/CustomUi/BlogComponent/BlogCarousel";
import Work from "@/components/CustomUi/HomeComponent/Work";
import { GetAllServices } from "@/ServerActions/FetchServices";
import ServiceCardSection from "@/components/CustomUi/ServiceComponent/ServiceCardSection";
import { MotionDiv , MotionSection } from "@/components/CustomUi/MotionDiv";



const page = async () => {
  const services = await GetAllServices({ _fields: "id,meta,slug,status,title" , service_category_exclude: 17});
  return (
    <main>
      <HeroBanner
        buttonHref="/services"
        className=" bg-hero-home-mob-banner bg-bottom lg:bg-center  lg:bg-hero-home-banner flex items-center h-[587px] lg:h-[640px] container m-auto p-5 lg:p-12"
        buttonText="Build your Brand"
      >
        <MotionDiv 
        initial={{opacity: 0 , y: 50}}
        animate={{opacity: 1 , y: 0}}
        transition={{duration: 0.8 , ease: "easeInOut" , delay: 1}}
        className="w-full h-full pt-[10px] pb-[50px] justify-between lg:justify-center lg:w-[60%] flex flex-col gap-[80px]">
          <div className="flex flex-col gap-3 lg:gap-8">
            <h1 className="normal-case">
              Simply put, we design and build brands
            </h1>
            <p className=" text-base lg:text-2xl">Driven by visuals, tech and automation</p>
          </div>
          <div className="flex justify-between lg:justify-start lg:gap-12">
            <PrimaryButton
              className="to-[#F7DB85]  bg-white text-primary text-[12px] md:text-base "
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
        </MotionDiv>
      </HeroBanner>

      <MotionSection
      initial={{opacity: 0 , y: 50}}
      whileInView={{opacity: 1 , y: 0}}
      transition={{duration: 0.3 , ease: "easeInOut" , delay: 0.2}}
      className=" py-16 w-full xl:max-w-[1300px] mx-auto my-[20px] flex flex-col gap-[80px]">
        <AnimatedLogoBanner />
      </MotionSection>
      <MotionSection 
      initial={{opacity: 0 , y: 50}}
      whileInView={{opacity: 1 , y: 0}}
      transition={{duration: 0.3 , ease: "easeInOut" , delay: 0.4}}
      className="sectionContainer w-full md:max-w-[1000px]">
        <Work />
      </MotionSection>
      <section className="sectionContainer flex flex-col lg:flex-row gap-5 md-flex-row justify-between items-start md:items-center">
        <Heading
          Heading="Trust earned the right way"
          subHeading="Thanks for rolling the dice on us"
        />
        <div className="w-full md:w-[60%]">
          <TestimonialCard />
        </div>
      </section>
      <section className="sectionContainer flex-col flex gap-[80px]">
        <Heading
          Heading="Our Services"
          subHeading="A Toolkit of Insight, Intuition & Tech"
        />
        <ServiceCardSection />
      </section>
      <section className="sectionContainer flex gap-5">        
          <BlogCarousel />
      </section>
    </main>
  );
};

export default page;
