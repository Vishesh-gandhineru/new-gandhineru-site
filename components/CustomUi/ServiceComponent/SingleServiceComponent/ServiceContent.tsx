import React from "react";
import { PrimaryButton } from "../../CustomButton";
import { ContactIcon } from "@/components/CustomIcons";
import Image from "next/image";
import ProcessTimeLine from "./ProcessTimeLine";
import TestimonialCard from "../../HomeComponent/TestimonialCard";
import { FAQSection } from "../FAQSlider";

const ServiceContent = ({ service }: Record<string, any>) => {
  const { meta } = service[0];

  
  const coverageList = Object.values(meta["coverage-list"]);
  const ProcessList = Object.values(meta["process-list"]);


  return (
    <div className="content w-full lg:w-[80%] space-y-[50px]">
      <section id="overview" className=" space-y-12">
        <div className=" space-y-4 relative">
          <h2>{meta["overview-heading"]}</h2>
          <div className="w-[80%]">
            <div
              dangerouslySetInnerHTML={{ __html: meta["overview-content"] }}
            />
          </div>
          <PrimaryButton
            href="/contact"
            className="to-white absolute right-0 bottom-0"
            icon={<ContactIcon />}
          >
            Let&apos;s Chat?
          </PrimaryButton>
        </div>
        <div className=" relative w-full h-[280px] rounded-[20px]">
          <Image
            src={meta["overview-image"]}
            fill={true}
            className=" object-cover object-center rounded-[20px]"
            alt={meta["overview-heading"]}
          />
        </div>
      </section>

      <section id="why">
        <div className=" space-y-4">
          <h3>{meta["why-title"]}</h3>

          <div dangerouslySetInnerHTML={{ __html: meta["why-content"] }} className=" grid grid-cols-2 gap-5 grid-flow-dense" />
        </div>
      </section>


      <section id="coverages">
        <div className=" space-y-4">
            <h3>Coverages</h3>
            <div>
            {
                coverageList.map((item: any, index: number) => {
                        return (
                                <li key={index}>{item["coverage-title"]}</li>
                        )
                })
            }

            </div>

            
        </div>
      </section>
      <section id="process">
        <div className=" space-y-4">
            <h3>Process</h3>
           <ProcessTimeLine ProcessList={ProcessList}/>

            
        </div>
      </section>
      <section>
        <h3>View work samples</h3>
        <h3>Need to working on the as this will come from wordpress</h3>
      </section>
      <section>
        <h3>Testimonials</h3>
        <TestimonialCard />
      </section>
      <section>
        <h3>FAQs</h3>
        <FAQSection />
      </section>
    </div>
  );
};

export default ServiceContent;
