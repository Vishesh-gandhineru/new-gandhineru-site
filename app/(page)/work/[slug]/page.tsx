import { GetAllWork, GetWorkBySlug } from "@/ServerActions/FetchWork";
import React from "react";
import Image from "next/image";
import he from "he";
import "../work.css";
import ProjectCard from "@/components/CustomUi/WorkComponent/ProjectCard";

type PageProps = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: PageProps) => {
  const { slug } = params;
  const work = await GetWorkBySlug(slug, {
    _fields: "id,slug,title,content,meta,_links",
  });

  const Projects = await GetAllWork(0,{ order: "asc" , per_page : 4});

  const { id, title, content, meta, _links, _embedded } = work[0];
  const {
    industry,
    banner_image,
    year,
    second_banner_image,
    hero_image,
    bold_text,
    bold_text_image,
    client_logo,
    project_brief,
    project_gallery,
    challenge,
    approach,
    impact,
    impact_gallery,
    client_testimonial_image,
    client_testimonial_tiitle,
    client_testimonial_content,
    client_testimonial_name,
    approach_banner
  } = meta;

  return (
    <main>
        {/* Hero banner */}
      <section className="sectionContainer">
        <div className=" relative w-full h-[400px]">
          <Image
            src={banner_image}
            alt="title"
            fill
            sizes="100vw"
            className=" object-cover object-center rounded-[20px]"
          />
        </div>
      </section>
      {/* Hero Content */}
      <section className="sectionContainer flex flex-col lg:flex-row flex-wrap gap-8 items-center justify-between">
        <div className="WorkContent w-full lg:w-[50%]">
          <h3 className="mb-[30px]">{title.rendered}</h3>
          <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
        </div>
        <div className="w-full lg:w-[40%] flex flex-wrap  h-fit gap-x-5 gap-y-8">
          <div className="flex flex-col gap-3">
            <p>Industry:</p>
            <span className="  w-fit border-[1px] rounded-full px-5 py-3 border-[#D0D0D0] uppercase text-[12px] leading-3 tracking-wider font-normal">
              {he.decode(industry)}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <p>Year:</p>
            <span className="  w-fit border-[1px] rounded-full px-5 py-3 border-[#D0D0D0] uppercase text-[12px] leading-3 tracking-wider font-normal">
              {he.decode(year)}
            </span>
          </div>
          <div className="flex flex-col gap-3 col-span-2">
            <p>Services:</p>
            <div className="flex flex-row gap-4 flex-wrap">
              {_embedded["wp:term"][0].map((service: any, index: number) => {
                return (
                  <span key={index} className=" w-fit inline-block border-[1px] rounded-full px-5 py-3 border-[#D0D0D0] uppercase text-[12px] leading-3 tracking-wider font-normal">
                    {he.decode(service.name)}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* First fold Img */}
      <section className="max-w-[1400px] m-auto">
        <div className=" relative w-full h-[300px] md:h-[400px] lg:h-[730px]">
          <Image
            src={hero_image}
            alt={title}
            fill
            sizes="100vw"
            className=" object-cover object-center rounded-[20px]"
          />
        </div>
      </section>
        {/* Bold Text */}
      <section className="sectionContainer grid grid-cols-1 gap-14 lg:grid-cols-2 justify-center items-center">
        <div className="text-center w-full lg:w-[80%]">
          <h2 className="text-[40px] leading-[50px]  md:text-[64px] md:leading-[74px] tracking-wider text-[#872980] font-bold">
            {bold_text}
          </h2>
          <div className=" relative w-full h-[30px] md:h-[50px] mt-6">
            <Image
              src={client_logo}
              fill = {true}
              sizes="100vw"
              alt="Client logo"
              className=" object-contain object-center"
            />
          </div>
        </div>
        <div className="relative h-[300px] lg:h-[560px] w-full">
          <Image
            src={bold_text_image}
            fill
            sizes="100vw"
            alt={bold_text}
            className=" object-cover object-center rounded-[20px]"
          />
        </div>
      </section>
        {/* Second fold Img */}
      <section className="max-w-[1400px] m-auto">
        <div className=" relative w-full h-[400px] lg:h-[730px]">
          <Image
            src={second_banner_image}
            alt={title}
            fill
            sizes="100vw"
            className=" object-cover object-center rounded-[20px]"
          />
        </div>
      </section>
        {/* Project brief */}
      <section className="sectionContainer flex flex-row flex-wrap gap-8 items-center justify-between">
        <div className="WorkContent w-full lg:w-[50%]">
          <h4 className="mb-[00px]">Project brief :</h4>
          <div
            dangerouslySetInnerHTML={{ __html: project_brief }}
            className="text-base"
          />
        </div>
      </section>
        {/* Project Gallery */}
      <section className="max-w-[1400px] m-auto grid grid-cols-5 gap-5 ">
        {project_gallery.map((image: string, index: number) => {
          return (
            <div
              key={index}
              className=" projectGallery relative w-full h-[200px] md:h-[400px] lg:h-[600px]"
            >
              <Image
                src={image}
                alt={`project image`}
                fill = {true}
                sizes="100vw"
                className=" object-cover object-center rounded-[20px]"
              />
            </div>
          );
        })}
      </section>
        {/* Challenge and Approach */}
      <section className="sectionContainer flex flex-row flex-wrap gap-8 items-center justify-between">
        <div className="WorkContent w-full md:w-[45%]">
          <h4 className="mb-[00px]">Challenge :</h4>
          <div
            dangerouslySetInnerHTML={{ __html: challenge }}
            className="text-base"
          />
        </div>
        <div className="WorkContent w-full md:w-[45%]">
          <h4 className="mb-[00px]">Approach :</h4>
          <div
            dangerouslySetInnerHTML={{ __html: approach }}
            className="text-base"
          />
        </div>
      </section>
        {/* Approach banner */}
        <section className="max-w-[1400px] m-auto">
        <div className=" relative w-full h-[400px] lg:h-[660px]">
          <Image
            src={approach_banner}
            alt={title}
            fill
            className=" object-cover object-center rounded-[20px]"
          />
        </div>
      </section>
        {/* Impact */}
        <section className="sectionContainer flex flex-row flex-wrap gap-8 items-center justify-between">
        <div className="WorkContent w-full lg:w-[50%]">
          <h4 className="mb-[00px]">Impact :</h4>
          <div
            dangerouslySetInnerHTML={{ __html: impact }}
            className="text-base"
          />
        </div>
      </section>
        {/* Impact Gallery */}
        <section className="max-w-[1400px] m-auto grid grid-cols-2 gap-5 ">
        {impact_gallery.map((image: string, index: number) => {
          return (
            <div
              key={index}
              className=" ImpactGallery relative w-full h-[200px] md:h-[400px] lg:h-[500px]"
            >
              <Image
                src={image}
                alt={`impact image`}
                fill = {true}
                sizes="100vw"
                className=" object-cover object-center rounded-[20px]"
              />
            </div>
          );
        })}
      </section>
      {/* client testimonial */}
      <section className="max-w-[1400px] m-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] my-[50px] justify-center items-center">
        <div>
            <Image src={client_testimonial_image} alt={`${title} testimonial`} width={668} height={550} className=" rounded-[20px]" />
        </div>
        <div>
            <h3 className="mb-3">{client_testimonial_tiitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: client_testimonial_content }} />
            <p className="text-[#686462] mt-8 text-sm">{client_testimonial_name}</p>
        </div>
      </section>
      {/* View more project */}
        <section className="sectionContainer">
            <div className="mb-5">
            <h3 className=" text-primary">View more projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 lg:gap-y-14">
            {Projects.map((project: any) => {
                return (
                <ProjectCard
                    key={project.id}
                    image={project._embedded["wp:featuredmedia"][0].source_url}
                    title={project?.title.rendered}
                    slug={project.slug}
                />
                );
            })}
            </div>
            </section>

    </main>
  );
};

export default page;
