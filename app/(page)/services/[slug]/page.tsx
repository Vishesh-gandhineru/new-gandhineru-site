import { GetServiceBySlug } from '@/ServerActions/FetchServices';
import HeroBanner from '@/components/CustomUi/HeroBanner';
import ServiceContent from '@/components/CustomUi/ServiceComponent/SingleServiceComponent/ServiceContent';
import ServiceSideBar from '@/components/CustomUi/ServiceComponent/SingleServiceComponent/ServiceSideBar';
import Link from 'next/link';
import React from 'react'




type ServiceProps = {
    params: {
        slug: string;
    };
};


const page = async ({params} : ServiceProps) => {
 
    const {slug} = params;       
    const service = await GetServiceBySlug(slug , {_fields:"id,slug,title,meta,status"});

    const bannerImageUrl = service[0]?.meta["banner-image"];

  return (
    <main>
    <HeroBanner
      buttonHref='/contact'
      className="container"
      style={{ backgroundImage: `url(${bannerImageUrl})` }}
      buttonText="Book a Clarity Call"
    ></HeroBanner>
    <section className='sectionContainer flex gap-4'>
        <ServiceSideBar  className='w-[20%] sticky top-[120px] bottom-2'/>
        <ServiceContent service={service}/>
   
    </section>
    </main>
  )
}

export default page