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
import "./about.css"

const AboutPage = async () => {
  const teams = await GetAllteam();

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
  console.log(teams);
  return (
    <main>
      <HeroBanner
        className=" bg-hero-about-banner container"
        buttonText="Book a Clarity Call"
      ></HeroBanner>
      {/* first fold */}
      <section className="sectionContainer space-y-8 text-center">
        <div className="space-y-8 text-center w-[900px] m-auto">
          <h2 className="text-center">
            If you've made it here, you must be curious about our story. Let's
            get to it.
          </h2>
          <PrimaryButton className="to-white" icon={<ContactIcon />}>
            Let&apos;s Chat?
          </PrimaryButton>
        </div>
        <div className=" relative w-[1030px] h-[360px] m-auto">
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
        <div className="w-[900px] m-auto flex  gap-7">
          <div className="w-[30%]">
            <h3>Who we are?</h3>
          </div>
          <div className="w-[65%]">
            <p>
              In 2018, Dishank Gandhi and Kalyani Nerurkar turned their shared
              passion for design into Gandhi & Neru. <br />
              <br />
              From our start in social media, we've since evolved into a
              tech-driven design studio, perfectly tuned to the needs of brands
              today.
            </p>
          </div>
        </div>
      </section>
      {/* What we do */}
      <section className="sectionContainer">
        <div className="w-[500px] m-auto text-center space-y-4">
          <h3>What we do?</h3>
          <p>
            With a growing team and a forward-thinking vision, we focus on four
            key areas to deliver impact.
          </p>
        </div>
      </section>
      {/* collaborate with */}
      <section className="sectionContainer">
        <div className="w-[900px] m-auto flex  gap-7">
          <div className="w-[30%]">
            <h3>Who do we collaborate with?</h3>
          </div>
          <div className="w-[65%]">
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
        <div className="w-[1000px] m-auto text-center">
          <div className="mb-[30px]">
            <h3>How do we add value?</h3>
          </div>
          <div className="grid grid-cols-3">
            <AnimatedAccordion>
              <AnimatedAccordionHeader bgImage="bg-transparency-bg">
                <h4>Transparency</h4>
              </AnimatedAccordionHeader>
              <AnimatedAccordionContent>
                We believe in a two-way open and honest dialogue. Communication
                and clarity is key at every step of the way.
              </AnimatedAccordionContent>
            </AnimatedAccordion>
            <AnimatedAccordion>
              <AnimatedAccordionHeader bgImage="bg-flexibility-bg">
                <h4>Flexibility</h4>
              </AnimatedAccordionHeader>
              <AnimatedAccordionContent>
                We believe in a two-way open and honest dialogue. Communication
                and clarity is key at every step of the way.
              </AnimatedAccordionContent>
            </AnimatedAccordion>
            <AnimatedAccordion>
              <AnimatedAccordionHeader bgImage="bg-creativity-bg">
                <h4>Creativity</h4>
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
        <div className="mt-[100px] grid grid-cols-5 gap-x-[20px] gap-y-[50px]">
          {teams.map((item: any) => {
            return <TeamCard key={item.id} team={item} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
