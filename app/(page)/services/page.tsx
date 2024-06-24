import HeroBanner from '@/components/CustomUi/HeroBanner'
import React from 'react'
import Image from 'next/image'
import { PrimaryButton } from '@/components/CustomUi/CustomButton'
import { ContactIcon } from '@/components/CustomIcons'
import ServiceCards from '@/components/CustomUi/ServiceCard'
import Heading from '@/components/CustomUi/Heading'

const ServicePage = () => {
  return (
    <main>
       <HeroBanner
        className=" bg-hero-server-banner container"
        buttonText="Book a Clarity Call"
      ></HeroBanner>
      <section className='sectionContainer space-y-8 text-center'>
        <h2 className='text-center'>Creating Brand Identity Systems empowered through Technology & Copywriting.</h2>
        <Image
      src="/Images/Blog cover.png"
      width={1260}
      height={360}
      alt="Picture of the author"
    />
   <PrimaryButton className='to-white' icon={<ContactIcon/>}>Let's Chat?</PrimaryButton>
      </section>
      <section className="sectionContainer flex-col flex gap-8">
        <Heading Heading='Our Services' subHeading='A Toolkit of Insight, Intuition & Tech' />
      <ServiceCards />
      </section>
    </main>
  )
}

export default ServicePage