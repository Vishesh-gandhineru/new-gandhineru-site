import HeroBanner from "@/components/CustomUi/HeroBanner";
import React from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/CustomUi/CustomButton";
import { ContactIcon, WhiteAndIcon } from "@/components/CustomIcons";
import Marquee from "@/components/CustomUi/Marquee/Marquee";
import {
  AnimatedAccordion,
  AnimatedAccordionContent,
  AnimatedAccordionHeader,
} from "@/components/CustomUi/AboutComponent/AnimatedAccordion";
import { Accordion } from "@radix-ui/react-accordion";
import { GetAllteam } from "@/ServerActions/FetchTeam";
import TeamCard from "@/components/CustomUi/AboutComponent/TeamCard";
import "./about.css";
import WhatWeDoSection from "@/components/CustomUi/AboutComponent/WhatWeDoSection";
import TeamsSection from "@/components/CustomUi/AboutComponent/TeamsSection";

const AboutPage = async () => {
  // const teams = await GetAllteam();

  const MarqueeItem = [
    {
      name: "Thinkers",
    },
    {
      name: "Dreamers",
    },
    {
      name: "Innovators",
    },
    {
      name: "Visionaries",
    },
    {
      name: "Leaders",
    },
    {
      name: "Disruptors",
    },
    {
      name: "Strategists",
    },
    {
      name: "Changemakers",
    },
  ];

  return (
    <main>
      <HeroBanner
        buttonHref="/contact"
        className=" bg-hero-about-mob-banner md:bg-hero-about-banner container"
        buttonText="Book a Clarity Call"
      ></HeroBanner>
      {/* first fold */}
      <section className="sectionContainer space-y-8 text-center">
        <div className="space-y-8 text-center w-full lg:w-[900px] m-auto">
          <h2 className="text-center">
            If you&apos;ve made it here, you must be curious about our story.
            Let&apos;s get to it.
          </h2>
          <PrimaryButton href="/contact" className="to-white" icon={<ContactIcon />}>
            Let&apos;s Chat?
          </PrimaryButton>
        </div>
        <div className=" relative w-full lg:w-[1030px] h-[360px] m-auto">
          <Image
            src="/Images/Blog cover.png"
            fill
            sizes="100vw"
            alt="Picture of the author"
            className="object-cover object-center rounded-[20px]"
          />
        </div>
      </section>
      {/* who we are */}
      <section className="sectionContainer">
        <div className="w-full lg:w-[900px] m-auto flex flex-col lg:flex-row  gap-7">
          <div className="w-full lg:w-[30%]">
            <h3>Who we are?</h3>
          </div>
          <div className="w-full lg:w-[65%]">
            <p>
              In 2018, Dishank Gandhi and Kalyani Nerurkar turned their shared
              passion for design into Gandhi & Neru. <br />
              <br />
              From our start in social media, we&apos;ve since evolved into a
              tech-driven design studio, perfectly tuned to the needs of brands
              today.
            </p>
          </div>
        </div>
      </section>
      {/* What we do */}
      <section className="sectionContainer">
        <WhatWeDoSection />
      </section>
      {/* collaborate with */}
      <section className="sectionContainer">
        <div className="w-full lg:w-[900px] m-auto flex flex-col lg:flex-row  gap-7">
          <div className="w-full lg:w-[30%]">
            <h3>Who do we collaborate with?</h3>
          </div>
          <div className="w-full lg:w-[65%]">
            <p>
              We team up with businesses at all stages, from inception to
              expansion. Design isn&apos;t isolated; it&apos;s an integrated
              part of your brand&apos;s journey. <br />
              <br />
              We take a comprehensive approach by examining businesses at a
              macro level and implementing solutions at the micro level. So if
              you&apos;re passionate about creating a long-lasting impact,
              <b> we&apos;re here for you.</b>
            </p>
          </div>
        </div>
      </section>
      {/* Mequu Section */}
      <section>
        <div>
          <Marquee className="[--duration:20s] text-[24px] text-[#C7C7C7]">
            {MarqueeItem.map((item, index) => {
              return (
                <div key={index} className="flex justify-between">
                  <div>{item.name}</div>
                  <div className="flex justify-end items-center mx-4 ml-8">
                    <WhiteAndIcon className=" fill-[#C7C7C7] w-[20px] h-[20px]" />
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </section>
      {/* Add value */}
      <section className="sectionContainer">
        <div className="w-full xl:w-[1000px] m-auto text-center">
          <div className="mb-[30px]">
            <h3>How do we add value?</h3>
          </div>
          <div className="flex flex-row overflow-scroll justify-start whitespace-nowrap lg:grid lg:grid-cols-3 lg:overflow-visible">
            <AnimatedAccordion>
              <AnimatedAccordionHeader bgImage="bg-transparency-bg">
              Transparency
              </AnimatedAccordionHeader>
              <AnimatedAccordionContent>
                We believe in a two-way open and honest dialogue. Communication
                and clarity is key at every step of the way.
              </AnimatedAccordionContent>
            </AnimatedAccordion>
            <AnimatedAccordion>
              <AnimatedAccordionHeader bgImage="bg-flexibility-bg">
                Flexibility
              </AnimatedAccordionHeader>
              <AnimatedAccordionContent>
                We believe in a two-way open and honest dialogue. Communication
                and clarity is key at every step of the way.
              </AnimatedAccordionContent>
            </AnimatedAccordion>
            <AnimatedAccordion>
              <AnimatedAccordionHeader bgImage="bg-creativity-bg">
                Creativity
              </AnimatedAccordionHeader>
              <AnimatedAccordionContent>
                We believe in a two-way open and honest dialogue. Communication
                and clarity is key at every step of the way.
              </AnimatedAccordionContent>
            </AnimatedAccordion>
          </div>
        </div>
      </section>
      <section className="sectionContainer">
        <div className="mb-[30px] text-center">
          <h3>Meet the team</h3>
        </div>
       {/* <TeamsSection teams={teams}/> */}
      </section>
    </main>
  );
};

export default AboutPage;
