import Image from 'next/image'
import React from 'react'
import Heading from '../Heading'

const AnimatedLogoBanner = () => {
  return (
    <section className='grid place-content-center relative py-[50px]'>
        <Heading Heading="Partners, not just Clients" subHeading="Our Creativity found a home" className='text-center'/>
       <Image src='/Images/compony logo.png' width={110} height={30} alt='Logo Banner' className=' absolute top-10 left-4'/>
       <Image src='/Images/compony logo.png' width={110} height={30} alt='Logo Banner' className=' absolute top-[80%] left-[20%]'/>
       <Image src='/Images/compony logo.png' width={110} height={30} alt='Logo Banner' className=' absolute bottom-10 right-4'/>
       <Image src='/Images/compony logo.png' width={110} height={30} alt='Logo Banner' className=' absolute bottom-[80%] right-[20%]'/>    
        </section>
  )
}

export default AnimatedLogoBanner