import { GetServiceBySlug } from '@/ServerActions/FetchServices';
import HeroBanner from '@/components/CustomUi/HeroBanner';
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
      className="container"
      style={{ backgroundImage: `url(${bannerImageUrl})` }}
      buttonText="Book a Clarity Call"
    ></HeroBanner>

    <section className='sectionContainer'>
        <h1>{slug}</h1>
    </section>
    </main>
  )
}

export default page