"use client"

import { GetAllServices } from '@/ServerActions/FetchServices';
import React from 'react'
import useSWR from "swr";
import { SecondaryButton } from '../CustomButton';
import Image from 'next/image';

const BundledServices = () => {
    const fetcher = () =>
    GetAllServices({ _fields: "id,meta,slug,status,title" , service_category: 17});

  const { data : bundleService, isLoading, error } = useSWR("GetBundleService", fetcher);

  return (
    <section className='mt-[50px]'>
        {bundleService?.map((item: any) => {
            const bgImage = item.meta["banner-image"];
            const serviceContent = item.meta["overview-content"];
            return (
                <div key={item.id} className='flex gap-8 justify-start items-center w-[80%]'>
                    <div className=' relative w-[480px] h-[280px]'><Image src={bgImage} alt='bundleServiceImage' fill={true} className=' object-cover object-center rounded-2xl'/></div>
                    <div className='flex flex-col gap-4 items-start w-[40%]'>
                        <h4>{item.title.rendered}</h4>
                        <div dangerouslySetInnerHTML={{ __html: serviceContent }} />
                        <SecondaryButton className='mt-[20px]'>Learn More</SecondaryButton>
                    </div>

                </div>
            )
        })}
    </section>
  )
}

export default BundledServices