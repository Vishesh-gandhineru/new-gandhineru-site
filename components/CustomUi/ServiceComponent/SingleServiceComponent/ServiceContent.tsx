"use client";

import React, { useEffect, useRef } from "react";
import { PrimaryButton } from "../../CustomButton";
import { ContactIcon } from "@/components/CustomIcons";
import Image from "next/image";
import ProcessTimeLine from "./ProcessTimeLine";
import TestimonialCard from "../../HomeComponent/TestimonialCard";
import { FAQSection } from "../FAQSlider";
import { GetAllWork } from "@/ServerActions/FetchWork";
import ProjectCard from "../../WorkComponent/ProjectCard";

import useSWR from "swr";
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";


type ServiceContentProps = {
  service: Record<string, any>;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

const ServiceContent = ({ service , setActiveSection }: ServiceContentProps) => {
  const { meta } = service[0];
  const WorkCategory = meta.work_category_id;
  const coverageList = Object.values(meta["coverage-list"]);
  const ProcessList = Object.values(meta["process-list"]);
  const fetcher = () => GetAllWork(WorkCategory);

  const { data: fetchWork } = useSWR("WorkCategory", fetcher);
  const container = useRef(null);
  const overview = useRef(null);
  const why = useRef(null);
  const coverages = useRef(null);
  const process = useRef(null);
  const faqs = useRef(null);
  const testimonials = useRef(null);
  const relevantProjects = useRef(null);

  const overViewInView = useInView(overview);
  const whyInView = useInView(why );
  const coveragesInView = useInView(coverages);
  const processInView = useInView(process);
  const faqsInView = useInView(faqs);
  const testimonialsInView = useInView(testimonials);
  const relevantProjectsInView = useInView(relevantProjects);
  
  useEffect(() => {
    if (overViewInView) {
      setActiveSection("overview");
    }
    if (whyInView) {
      setActiveSection("why");
    }
    if (coveragesInView) {
      setActiveSection("coverages");
    }
    if (processInView) {
      setActiveSection("process");
    }
    if (faqsInView) {
      setActiveSection("faqs");
    }
    if (testimonialsInView) {
      setActiveSection("testimonials");
    }
    if (relevantProjectsInView) {
      setActiveSection("relevant-projects");
    }
  } , [overViewInView , whyInView , coveragesInView , processInView , faqsInView , testimonialsInView , relevantProjectsInView])

  return (
    <div className="content w-full lg:w-[80%] space-y-[50px]" ref={container}>
      <motion.section id="overview" className="space-y-12" ref={overview}>
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
      </motion.section>

      <motion.section id="why" ref={why}>
        <div className=" space-y-4">
          <h3>{meta["why-title"]}</h3>

          <div
            dangerouslySetInnerHTML={{ __html: meta["why-content"] }}
            className=" grid grid-cols-2 gap-5 grid-flow-dense"
          />
        </div>
      </motion.section>

      <motion.section id="coverages" ref={coverages}>
        <div className=" space-y-4">
          <h3>Coverages</h3>
          <div>
            {coverageList.map((item: any, index: number) => {
              return <li key={index}>{item["coverage-title"]}</li>;
            })}
          </div>
        </div>
      </motion.section>
      <section id="process" ref={process}>
        <div className=" space-y-4">
          <h3>Process</h3>
          <ProcessTimeLine ProcessList={ProcessList} />
        </div>
      </section>
      <motion.section
      
        id="relevant-projects"
        className="space-y-8"
        ref={relevantProjects}
      >
        <h3>View work samples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 lg:gap-y-14">
          {fetchWork?.map((project: any, index: number) => {
            return (
              <ProjectCard
                index={index}
                key={project.id}
                image={project._embedded["wp:featuredmedia"][0].source_url}
                title={project?.title.rendered}
                slug={project.slug}
              />
            );
          })}
        </div>
      </motion.section>
      <motion.section
     
        id="testimonials"
        className="sectionContainer flex"
        ref={testimonials}
      >
        <h3>Testimonials</h3>
        <TestimonialCard />
      </motion.section>
      <section  id="faqs" className="sectionContainer" ref={faqs}>
        <h3>FAQs</h3>
        <FAQSection />
      </section>
    </div>
  );
};

export default ServiceContent;
