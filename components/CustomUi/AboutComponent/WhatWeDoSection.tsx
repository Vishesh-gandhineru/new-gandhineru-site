"use client";

import React, { useEffect, useRef, useState } from "react";
import { FlipCard } from "../FlipCard";
import { BackCard, FrontCard } from "../FlipCard";
import { ArrowRight } from "@/components/CustomIcons";
import { cn } from "@/lib/utils";
import "./AboutComponent.css";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionFlipCard = motion(FlipCard);

const WhatWeDoSection = () => {
  const FlipCardContent = [
    {
      front: {
        title: "Process Automation",
        bg_image: "bg-processAutomation-bg",
      },
      back: {
        title: "Process Automation",
        content:
          "We help you automate your business processes to increase efficiency and reduce human errors.",
        bg_color: "#FFF8B2",
      },
    },
    {
      front: {
        title: "Brand Essence",
        bg_image: "bg-brandEssence-bg",
      },
      back: {
        title: "Brand Essence",
        content:
          "We help you automate your business processes to increase efficiency and reduce human errors.",
        bg_color: "#F4E5CF",
      },
    },
    {
      front: {
        title: "Digital Connection",
        bg_image: "bg-digitalConnection-bg",
      },
      back: {
        title: "Digital Connection",
        content:
          "We help you automate your business processes to increase efficiency and reduce human errors.",
        bg_color: "#D286AF",
      },
    },
    {
      front: {
        title: "Engage Audience",
        bg_image: "bg-engageAudience-bg",
      },
      back: {
        title: "Engage Audience",
        content:
          "We help you automate your business processes to increase efficiency and reduce human errors.",
        bg_color: "#96CED3",
      },
    },
  ];

  const conatiner = useRef(null);
  const { scrollYProgress } = useScroll({
    target: conatiner,
    offset: ["start end", "end end"],
  });
  const ProcessY = useTransform(scrollYProgress, [0, 1], [-350, 0]);
  const EngageY = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const BrandY = useTransform(scrollYProgress, [0, 1], [-250, 0]);
  const DigitalY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  
  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    })
  }, [isMobile]);

  console.log(isMobile);

  return (
    <div className="space-y-10 mt-[20vh] relative" ref={conatiner}>
      <div className="w-full lg:w-[500px] m-auto text-center space-y-4 ">
        <h3>What we do?</h3>
        <p>
          With a growing team and a forward-thinking vision, we focus on four
          key areas to deliver impact.
        </p>
      </div>
      <div className=" flex overflow-x-scroll overflow-y-hidden whitespace-nowrap lg:overflow-visible lg:flex-row gap-5 relative h-full w-full">
        <MotionFlipCard
          className="WhatWeDoFlipCards relative text-wrap"
          style={{ translateY: isMobile ? "0" : ProcessY }}
        >
          <FrontCard
            className={`p-8 bg-cover bg-center rounded-[20px] text-white bg-processAutomation-bg`}
          >
            <h3>Process Automation</h3>
            <div className="w-fit absolute bottom-4 right-4 p-3 rounded-full bg-[#373737b3]">
              <ArrowRight className="rotate-[-45deg] scale-125" />
            </div>
          </FrontCard>
          <BackCard className={cn("p-8 rounded-[20px] space-y-4 bg-[#FFF8B2]")}>
            <h3>Process Automation</h3>
            <p>
              We help you automate your business processes to increase
              efficiency and reduce human errors.
            </p>
          </BackCard>
        </MotionFlipCard>
        <MotionFlipCard
          className="WhatWeDoFlipCards relative"
          style={{ translateY: isMobile ? "0" : EngageY }}
        >
          <FrontCard
            className={`p-8 bg-cover bg-center rounded-[20px] text-white bg-engageAudience-bg`}
          >
            <h3>Engage Audience</h3>
            <div className="w-fit absolute bottom-4 right-4 p-3 rounded-full bg-[#373737b3]">
              <ArrowRight className="rotate-[-45deg] scale-125" />
            </div>
          </FrontCard>
          <BackCard className={cn("p-8 rounded-[20px] space-y-4 bg-[#96CED3]")}>
            <h3>Engage Audience</h3>
            <p>
              We help you automate your business processes to increase
              efficiency and reduce human errors.
            </p>
          </BackCard>
        </MotionFlipCard>
        <MotionFlipCard
          className="WhatWeDoFlipCards relative"
          style={{ translateY: isMobile ? "0" : DigitalY }}
        >
          <FrontCard
            className={`p-8 bg-cover bg-center rounded-[20px] text-white bg-digitalConnection-bg`}
          >
            <h3>Digital Connection</h3>
            <div className="w-fit absolute bottom-4 right-4 p-3 rounded-full bg-[#373737b3]">
              <ArrowRight className="rotate-[-45deg] scale-125" />
            </div>
          </FrontCard>
          <BackCard className={cn("p-8 rounded-[20px] space-y-4 bg-[#D286AF]")}>
            <h3>Digital Connection</h3>
            <p>
              We help you automate your business processes to increase
              efficiency and reduce human errors.
            </p>
          </BackCard>
        </MotionFlipCard>
        <MotionFlipCard
          className="WhatWeDoFlipCards relative"
          style={{ translateY: isMobile ? "0" : BrandY }}
        >
          <FrontCard
            className={`p-8 bg-cover bg-center rounded-[20px] text-white bg-brandEssence-bg`}
          >
            <h3>Brand Essence</h3>
            <div className="w-fit absolute bottom-4 right-4 p-3 rounded-full bg-[#373737b3]">
              <ArrowRight className="rotate-[-45deg] scale-125" />
            </div>
          </FrontCard>
          <BackCard className={cn("p-8 rounded-[20px] space-y-4 bg-[#F4E5CF]")}>
            <h3>Brand Essence</h3>
            <p>
              We help you automate your business processes to increase
              efficiency and reduce human errors.
            </p>
          </BackCard>
        </MotionFlipCard>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
