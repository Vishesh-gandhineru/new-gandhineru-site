import HeroBanner from "@/components/CustomUi/HeroBanner";
import React from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/CustomUi/CustomButton";
import { ContactIcon } from "@/components/CustomIcons";
import ServiceCards from "@/components/CustomUi/ServiceCard";
import Heading from "@/components/CustomUi/Heading";
import BundledServices from "@/components/CustomUi/ServiceComponent/BundledServices";
import CompareTable from "@/components/CustomUi/ServiceComponent/CompareTable";
import { FAQSection } from "@/components/CustomUi/ServiceComponent/FAQSlider";
import ServiceCardSection from "@/components/CustomUi/ServiceComponent/ServiceCardSection";

const ServicePage = () => {
  return (
    <main>
      <HeroBanner
        className=" bg-hero-server-banner container"
        buttonText="Book a Clarity Call"
      ></HeroBanner>
      <section className="sectionContainer space-y-8 text-center">
        <h2 className="text-center">
          Creating Brand Identity Systems empowered through Technology &
          Copywriting.
        </h2>
        <Image
          src="/Images/Blog cover.png"
          width={1260}
          height={360}
          alt="Picture of the author"
        />
        <PrimaryButton className="to-white" icon={<ContactIcon />}>
          Let&apos;s Chat?
        </PrimaryButton>
      </section>
      <section className="sectionContainer flex-col flex gap-8">
        <Heading
          Heading="Our Services"
          subHeading="A Toolkit of Insight, Intuition & Tech"
        />
        <ServiceCardSection />
      </section>
      <section className="sectionContainer">
        <Heading
          Heading="Bundled Services"
          subHeading="Experience seamless synergy with our bundled services, combining the power of brand identity, website design + development, digital design and copy writing to elevate your brand and maximize impact across all touchpoints."
          className=" flex-col-reverse w-[50%]"
        />
        <BundledServices/>
      </section>
      <section className="sectionContainer flex flex-col gap-8">
        <Heading
          Heading="Why this is beneficial?"
          subHeading="Experience seamless synergy with our bundled services, combining the power."
          className=" flex-col-reverse w-[50%]"
        />
        <CompareTable />  
      </section>
      <section className="sectionContainer flex flex-col gap-8">
       <h3 className="text-center">Have questions about our services?</h3>
      <FAQSection />  
      </section>
    </main>
  );
};

export default ServicePage;
