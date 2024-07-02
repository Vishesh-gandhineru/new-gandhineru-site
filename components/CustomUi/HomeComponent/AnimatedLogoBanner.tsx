import Image from 'next/image'
import React from 'react'
import Heading from '../Heading'

const AnimatedLogoBanner = () => {
  return (
    <section className='grid place-content-center relative w-full'>
        <Heading Heading="Partners, not just Clients" subHeading="Our Creativity found a home" className='text-center'/>
       <Image src='/Images/compony logo.png' width={110} height={30} alt='Logo Banner' className=' absolute top-[100%] left-0 scale-[0.8] lg:scale-100 lg:top-10 lg:left-4'/>
       <Image src='/Images/compony logo.png' width={110} height={30} alt='Logo Banner' className=' absolute top-[100%] right-[0%] scale-[0.8] lg:scale-100 lg:top-[80%] lg:left-[20%]'/>
       <Image src='/Images/compony logo.png' width={110} height={30} alt='Logo Banner' className=' absolute top-[120%] right-[35%] scale-[0.8] lg:scale-100 lg:bottom-10 lg:right-4'/>
       <Image src='/Images/compony logo.png' width={110} height={30} alt='Logo Banner' className=' absolute bottom-[80%] right-[20%] scale-[0.8] lg:scale-100 hidden lg:inline-block'/>    
        </section>
  )
}

export default AnimatedLogoBanner