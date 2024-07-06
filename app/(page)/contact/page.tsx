import LocationCard from "@/components/CustomUi/ContactComponent/LocationCard";
import ContactForm from "@/components/CustomUi/ContactForm";
import HeroBanner from "@/components/CustomUi/HeroBanner";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <main>
      <section>

      <HeroBanner
        buttonHref="/contact"
        className=" bg-hero-contact-banner container"
        buttonText="Book a Clarity Call"
      ></HeroBanner>
      </section>
    <section className="sectionContainer">
    <div className="flex flex-col gap-[20px] justify-start items-start">
          <h1 className="">
            Got a vision? <br /> We&apos;ll make it happen.
          </h1>
          <p className=" tracking-[1px]">
            Let&apos;s work together - fill out the form below. Or simply drop us an
            email.
          </p>
        </div>
    </section>
    <section className="sectionContainer">
    <div className="grig place-content-center">
          <ContactForm />
        </div>
    </section>
    <section className="sectionContainer">
    <div className="flex flex-col md:flex-row gap-[20px] lg:gap-[50px] justify-center">
          <div className="flex flex-col gap-5 text-base">
            <p className="text-base tracking-[1px]">Start a project : </p>
            <Link href="mailto:hello@1gandhineru.com" className='border-[1px] ml-5 rounded-full w-fit h-fit py-2 px-7 text-sm'>hello@gandhineru.com</Link>
          </div>
          <div className="flex flex-col gap-5 text-base">
            <p className=" text-base tracking-[1px]">Partner with us : </p>
            <Link href="mailto:hello@1gandhineru.com" className='border-[1px] ml-5 rounded-full w-fit h-fit py-2 px-7 text-sm'>hello@gandhineru.com</Link>
          </div>
          <div className="flex flex-col gap-5 text-base">
            <p className=" text-base tracking-[1px]">Join the team: : </p>
            <Link href="mailto:hello@1gandhineru.com" className='border-[1px] ml-5 rounded-full w-fit h-fit py-2 px-7 text-sm'>hello@gandhineru.com</Link>
          </div>
         
        </div>
    </section>
    <section className="sectionContainer">
      
      <h2 className="w-full mb-4 xl:w-[1140px] float-end">Location</h2>
    <div className="w-full flex flex-col md:flex-row justify-center">      
        <LocationCard location="Mumbia" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." time="12:30 pm" imageSrc="/Images/mango.png" open={true} />
        <LocationCard location="Italy" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." time="12:30 pm" imageSrc="/Images/graps.png" />
        <LocationCard location="Sri Lanka" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." time="12:30 pm" imageSrc="/Images/drangon.png"/>
        </div>

    </section>
    </main>
  );
};

export default ContactPage;
