import React from "react";
import { SecondaryButton, SocialButton } from "../CustomButton";

import { WhiteAndIcon, LogoBlack } from "@/components/CustomIcons";
import Marquee from "../Marquee/Marquee";
import NewsLetterForm from "./FooterNewsLetterForm";

const MainFooter = () => {
  return (
    <footer className="my-[50px] container m-auto p-0">
      <div className="footer-content pt-[50px] h-[600px] bg-footer-bg bg-cover bg-no-repeat bg-center rounded-[20px] relative">
        <div className="FooterButton px-8 pb-2 rounded-b-[15px]  absolute top-0 left-[50%] translate-x-[-50%] bg-white">
          <SecondaryButton>Book a Clarity Call</SecondaryButton>
        </div>
        <div>
          <div>
            <Marquee className="[--duration:20s] text-[64px] text-white">
              <div>Lets dive into wild ideas!</div>
              <div className="flex justify-center items-center mx-4">
                <WhiteAndIcon className=" fill-white w-[48px] h-[48px]" />
              </div>
              <div>Lets dive into wild ideas!</div>
              <div className="flex justify-center items-center mx-4">
                <WhiteAndIcon className=" fill-white w-[48px] h-[48px]"  />
              </div>
            </Marquee>
          </div>
          <div className=" px-8">
            <div className="bg-white w-full h-full py-[50px] flex flex-col gap-12 container rounded-[30px]">
              <div className="flex gap-8">
                <div className="w-[40%] flex flex-col gap-8">
                  <LogoBlack />
                  <div className="flex flex-col gap-8">
                    <h2 className=" text-2xl">
                      Get the latest <br /> news in your inbox
                    </h2>
                    <NewsLetterForm />
                  </div>
                </div>
                <div className="w-[60%] flex flex-col justify-between">
                  {/* Footer menu */}
                  <div className="grid grid-cols-3 items-end">
                    <div>
                      <h2 className="text-2xl mb-5 text-primary">Info</h2>
                      <ul className="flex flex-col gap-3 text-base text-[#404040]">
                        <li>About</li>
                        <li>Case Studies</li>
                        <li>Blogs</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-2xl mb-5 text-primary">Services</h2>
                      <ul className="flex flex-col gap-3 text-base text-[#404040]">
                        <li>Branding</li>
                        <li>UI/UX</li>
                        <li>Web Development</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="flex flex-col gap-3 text-base text-[#404040]">
                        <li>Process Automation</li>
                        <li>Content</li>
                        <li>Bundled Services</li>
                      </ul>
                    </div>
                  </div>

                  {/* Social button */}
                  <div>
                    <SocialButton>Facebook</SocialButton>
                    <SocialButton>Dribbble</SocialButton>
                    <SocialButton>Clutch</SocialButton>
                    <SocialButton>LinkedIn</SocialButton>
                    <SocialButton>Instagram</SocialButton>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-5 items-center text-[#878787] text-sm">
                <span>©2025 Gandhi & Neru</span>
                <span className="w-[750px] h-[2px] bg-[#C7C7C7] mt-1"></span>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
