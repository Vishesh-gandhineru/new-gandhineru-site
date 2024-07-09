import { GetServiceBySlug } from "@/ServerActions/FetchServices";
import HeroBanner from "@/components/CustomUi/HeroBanner";
import ServiceContent from "@/components/CustomUi/ServiceComponent/SingleServiceComponent/ServiceContent";
import ServiceSideBar from "@/components/CustomUi/ServiceComponent/SingleServiceComponent/ServiceSideBar";
import React from "react";
import "../service.css"
import ServiceMain from "@/components/CustomUi/ServiceComponent/SingleServiceComponent/ServiceMain";

type ServiceProps = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: ServiceProps) => {
  const { slug } = params;
  const service = await GetServiceBySlug(slug, {
    _fields: "id,slug,title,meta,status,work_category_id",
  });

  const bannerImageUrl = service[0]?.meta["banner-image"];

  return (
    <main>
      <HeroBanner
        buttonHref="/contact"
        
        style={{ backgroundImage: `url(${bannerImageUrl})` }}
        buttonText="Book a Clarity Call"
      ></HeroBanner>
      <section className="sectionContainer">
       <ServiceMain service={service} />
      </section>
    </main>
  );
};

export default page;
