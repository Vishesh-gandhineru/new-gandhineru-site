"use client";
import React from "react";
import ServiceCards from "@/components/CustomUi/ServiceCard";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/CustomUi/CustomButton";
import { MotionDiv } from "@/components/CustomUi/MotionDiv";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
const page = () => {
  return (
    <main className="my-20">
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
