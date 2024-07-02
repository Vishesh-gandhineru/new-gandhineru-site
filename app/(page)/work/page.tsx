
import { GetAllWork, GetAllWorkCategory } from "@/ServerActions/FetchWork";
// import WorkCard from "@/components/CustomUi/WorkComponent/WorkCard";
import React, { Suspense } from "react";
import "./work.css"
import Loading from "./loading";
import WorkCategoryFilter from "@/components/CustomUi/WorkComponent/WorkCategoryFilter";
import WorkCard from "@/components/CustomUi/WorkComponent/WorkCard";


type WorkPageProps = {
  searchParams: {
    category: string;
    id: number
  } 
};


const WorKPage = async ({searchParams} : WorkPageProps) => {
  const {category, id} = searchParams
  const works = await GetAllWork( id ? id : 0 , {order : "asc"}); 
  const workCategory = await GetAllWorkCategory({_field:"id,count,name,slug"});
  
   
  return (
    <main>
      <section className="sectionContainer">
        <div className="mb-10">
        <h1 className=" text-primary">Explore our Work</h1>
        <WorkCategoryFilter categories={workCategory} activeCategory={category} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-5 gap-y-14">   
        
        {works.map((work: any) => {
          return (
            <WorkCard   
            key={work.id}           
              className="workCard"
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
