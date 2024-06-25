import { GetAllWork } from "@/ServerActions/FetchWork";
import WorkCard from "@/components/CustomUi/WorkComponent/WorkCard";
import React from "react";
import "./work.css"

const WorKPage = async () => {
  const works = await GetAllWork({order : "asc"});

  return (
    <main>
      <section className="sectionContainer">
        <div className="mb-10">
        <h1 className=" text-primary">Explore our Work</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-5 gap-y-14">
        {works.map((work: any) => {
          return (
            <WorkCard
            className="workCard"
              key={work.id}
              image={work._embedded["wp:featuredmedia"][0].source_url}
              title={work?.title.rendered}
              tags={work._embedded["wp:term"][0]}
              slug={work.slug}
            />
          );
        })}          
        </div>
      </section>
    </main>
  );
};

export default WorKPage;
