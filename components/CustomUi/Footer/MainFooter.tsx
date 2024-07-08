import React from "react";
import { SecondaryButton, SocialButton } from "../CustomButton";

import { WhiteAndIcon, LogoBlack } from "@/components/CustomIcons";
import Marquee from "../Marquee/Marquee";
import NewsLetterForm from "./FooterNewsLetterForm";
import Link from "next/link";


const MainFooter = () => {
  return (
    <footer className="my-[50px] container m-auto p-0">
      <div className="footer-content pt-[50px] h-fit lg:h-[600px] bg-footer-bg bg-cover bg-no-repeat bg-center rounded-[20px] relative">
        <div className="FooterButton px-8 pb-2 rounded-b-[15px]  absolute top-0 left-[50%] translate-x-[-50%] bg-white">
          <SecondaryButton>Book a Clarity Call</SecondaryButton>
        </div>
        <div>
          <div className="my-5 lg:my-0">
            <Marquee className="[--duration:20s] text-[34px] lg:text-[64px] text-white">
              <div>Lets dive into wild ideas!</div>
              <div className="flex justify-center items-center lg:mx-4">
                <WhiteAndIcon className=" fill-white w-[28px] h-[28px] lg:w-[48px] lg:h-[48px]" />
              </div>
              <div>Lets dive into wild ideas!</div>
              <div className="flex justify-center items-center lg:mx-4">
                <WhiteAndIcon className=" fill-white w-[28px] h-[28px] lg:w-[48px] lg:h-[48px]"  />
              </div>
            </Marquee>
          </div>
          <div className="px-5 lg:px-8">
            <div className="bg-white w-full h-full py-[50px] px-6 lg:px-14 flex flex-col gap-12 container rounded-[30px]">
              <div className="flex  flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-[40%] flex flex-col gap-5 md:gap-8">
                  <LogoBlack className="w-[200px] h-full"/>
                  <div className="flex flex-col gap-8">
                    <h2 className=" text-2xl">
                      Get the latest <br /> news in your inbox
                    </h2>
                    <NewsLetterForm />
                  </div>
                </div>
                <div className="w-full lg:w-[60%] flex flex-col justify-between">
                  {/* Footer menu */}
                  <div className=" grid grid-cols-1 md:grid-cols-3 items-end gap-5">
                    <div className="w-full col-span-1">
                      <h2 className="text-2xl mb-4 text-primary">Info</h2>
                      <ul className="grid grid-cols-2 md:grid-cols-1 gap-3  text-[#404040] text-[14px] lg:text-base">
                        <Link href='/about'>About</Link>
                        <Link href='/work'>Case Studies</Link>
                        <Link href='/blogs'>Blogs</Link>
                      </ul>
                    </div>
                    <div className="w-full col-span-2">
                      <h2 className="text-2xl mb-4 text-primary">Services</h2>
                      <ul className="grid grid-cols-2 md:grid-cols-2 gap-y-3 lg:gap-x-[10px] text-[14px] lg:text-base text-[#404040]">
                        <Link href='/services#branding-design'>Branding</Link>
                        <Link href='/services#no-code-process'>Process Automation</Link>
                        <Link href='/services#illustration'>UI/UX</Link>
                        <Link href='/services#product-development'>Content</Link>
                        <Link href='/services#web-development'>Web Development</Link>
                        <Link href='/services#bundled-services'>Bundled Services</Link>
                      </ul>
                    </div>
                  </div>

                  {/* Social button */}
                  <div className="mt-8 md:mt-8 flex flex-row gap-y-3 flex-wrap md:gap-y-4  ">
                    <SocialButton className="px-4 md:px-7 text-[12px] md:text-base">Facebook</SocialButton>
                    <SocialButton className="px-4 md:px-7 text-[12px] md:text-base">Dribbble</SocialButton>
                    <SocialButton className="px-4 md:px-7 text-[12px] md:text-base">Clutch</SocialButton>
                    <SocialButton className="px-4 md:px-7 text-[12px] md:text-base">LinkedIn</SocialButton>
                    <SocialButton className="px-4 md:px-7 text-[12px] md:text-base">Instagram</SocialButton>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap justify-between gap-5 items-center text-[#878787] text-sm">
                <span className="w-full md:w-fit  text-center order-1">©2025 Gandhi & Neru</span>
                <span className="w-0 md:w-[200px] lg:w-[300px] xl:w-[750px] h-[2px] bg-[#C7C7C7] mt-1 md:order-2"></span>
                <span className="md:order-3">Privacy Policy</span>
                <span className="md:order-4">Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
