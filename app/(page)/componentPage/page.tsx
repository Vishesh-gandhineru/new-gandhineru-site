"use client";
import React from "react";
import ServiceCards from "@/components/CustomUi/ServiceCard";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/CustomUi/CustomButton";
import { FadeInDiv, MotionDiv } from "@/components/CustomUi/MotionDiv";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import HeroBanner from "@/components/CustomUi/HeroBanner";
const page = () => {
  return (
    <main className="my-20">

<HeroBanner
        buttonHref="/services"
        className="bg-bottom md:bg-center  md:bg-hero-home-banner flex items-center h-[550px] md:h-[500px] lg:h-[640px] container m-auto p-5 md:p-8 lg:p-12"
        buttonText="Build your Brand"
      >
        
          <video src="https://cms.gandhineru.com/wp-content/uploads/2024/07/an_chocolate_bar_style_keyboard_where_the_keys_are_typing_729bc9.mp4" 
          className="h-full w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-center z-[1] rounded-[20px]" autoPlay loop muted></video>
      
        <FadeInDiv 
        className="w-full h-full pt-[90px] md:pt-[50px] pb-[50px] justify-between md:justify-end lg:justify-center md:w-[80%] lg:w-[60%] flex flex-col gap-[80px] z-[20]">
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
      <section className="sectionContainer">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(" h-full sticky grid place-content-center top-[20%]")}
        >
          {/* <motion.div
            className="w-full relative h-[420px] md:h-[350px] lg:h-[420px] bg-cover rounded-[20px] bg-center p-10 lg:p-16 flex flex-col justify-end pb-[50px] lg:pb-[80px]"
            style={{
              backgroundImage:
                "url(https://cms.gandhineru.com/wp-content/uploads/2024/06/Web-Development.png)",
              scale: 1,
              top: `calc(-5vh + ${1 * 25}px)`,
            }}
          > */}
            <div className="w-full relative h-[420px] md:h-[350px] lg:h-[420px] bg-cover rounded-[20px] bg-center p-10 lg:p-16 flex flex-col justify-end pb-[50px] lg:pb-[80px]">
              <video
                src="https://cms.gandhineru.com/wp-content/uploads/2024/07/a_tap_on_the_wall_flowing_popcorns_out_and_that_popcorns_in_getting_collected_into_the_blow__and_the_dd4b05.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover object-right rounded-[20px] absolute top-0 left-0 -z-10"
              ></video>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full md:w-[65%] lg:w-[50%] flex flex-col gap-6"
              >
                <h2 className="text-white">Test</h2>
                <div>
                  TEst test Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Sapiente amet quod reiciendis provident! Qui labore ut,
                  maiores sed, facere nostrum, a sit officiis necessitatibus
                  reprehenderit tempore laboriosam unde. Iusto, quam.
                </div>

                <div className="flex gap-12">
                  <PrimaryButton
                    className="text-white bg-[#242120] text-[12px] md:text-base"
                    href={`/services/`}
                  >
                    Take it ahead
                  </PrimaryButton>

                  <SecondaryButton
                    href="/services"
                    className="text-base text-white text-[12px] md:text-base"
                    arrowColor="white"
                  >
                    View Projects
                  </SecondaryButton>
                </div>
              </motion.div>
            </div>
          {/* </motion.div> */}
        </MotionDiv>
      </section>
    </main>
  );
};

export default page;
