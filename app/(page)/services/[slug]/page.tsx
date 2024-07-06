import { GetServiceBySlug } from "@/ServerActions/FetchServices";
import HeroBanner from "@/components/CustomUi/HeroBanner";
import ServiceContent from "@/components/CustomUi/ServiceComponent/SingleServiceComponent/ServiceContent";
import ServiceSideBar from "@/components/CustomUi/ServiceComponent/SingleServiceComponent/ServiceSideBar";
import React from "react";

type ServiceProps = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: ServiceProps) => {
  const { slug } = params;
  const service = await GetServiceBySlug(slug, {
    _fields: "id,slug,title,meta,status",
  });

  const bannerImageUrl = service[0]?.meta["banner-image"];

  return (
    <main>
      <HeroBanner
        buttonHref="/contact"
        
        style={{ backgroundImage: `url(${bannerImageUrl})` }}
        buttonText="Book a Clarity Call"
      ></HeroBanner>
      <section className="sectionContainer flex flex-col lg:flex-row  gap-8">
        <ServiceSideBar className="w-full gap-8 lg:gap-4 lg:w-[20%] flex-row lg:flex-col lg:sticky top-[120px] bottom-2" />
        <ServiceContent service={service} />
      </section>
    </main>
  );
};

export default page;
