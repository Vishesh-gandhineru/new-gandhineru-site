import ContactForm from "@/components/CustomUi/ContactForm";
import HeroBanner from "@/components/CustomUi/HeroBanner";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <section>
      <HeroBanner
        className=" bg-hero-contact-banner container"
        buttonText="Book a Clarity Call"
      ></HeroBanner>
      <div className="container my-[80px] flex flex-col gap-[50px] px-12">
        <div className="flex flex-col gap-[20px] justify-start items-start">
          <h1 className="text-[52px] leading-[66px]">
            Got a vision? <br /> We&apos;ll make it happen.
          </h1>
          <p className=" tracking-[1px]">
            Let&apos;s work together - fill out the form below. Or simply drop us an
            email.
          </p>
        </div>
        <div className="grig place-content-center">
          <ContactForm />
        </div>
        <div className="flex gap-[50px] justify-center">
          <div className="flex flex-col gap-5 text-base">
            <p className="tracking-[1px]">Start a project : </p>
            <Link href="mailto:hello@1gandhineru.com" className='border-[1px] ml-5 rounded-full w-fit h-fit py-2 px-7 text-sm'>hello@gandhineru.com</Link>
          </div>
          <div className="flex flex-col gap-5 text-base">
            <p className="tracking-[1px]">Partner with us : </p>
            <Link href="mailto:hello@1gandhineru.com" className='border-[1px] ml-5 rounded-full w-fit h-fit py-2 px-7 text-sm'>hello@gandhineru.com</Link>
          </div>
          <div className="flex flex-col gap-5 text-base">
            <p className="tracking-[1px]">Join the team: : </p>
            <Link href="mailto:hello@1gandhineru.com" className='border-[1px] ml-5 rounded-full w-fit h-fit py-2 px-7 text-sm'>hello@gandhineru.com</Link>
          </div>
         
        </div>
        <div>
        Locations -- Pending
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
