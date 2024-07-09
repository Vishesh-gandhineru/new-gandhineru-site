"use client";

import React, { useState } from "react";
import ServiceSideBar from "./ServiceSideBar";
import ServiceContent from "./ServiceContent";

type ServiceMainProps = {
  service: any;
};

const ServiceMain = ({ service }: ServiceMainProps) => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex flex-col lg:flex-row  gap-8">
      <ServiceSideBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        className="w-full gap-8 overflow-scroll whitespace-nowrap lg:overflow-visible  lg:gap-4 lg:w-[20%] flex-row lg:flex-col lg:sticky lg:top-[120px] lg:bottom-2"
      />
      <ServiceContent setActiveSection={setActiveSection} service={service} />
    </div>
  );
};

export default ServiceMain;
