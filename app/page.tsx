import React from 'react'
import { PrimaryButton , SecondaryButton, SocialButton } from '@/components/CustomUi/CustomButton'
import { ContactIcon } from '@/components/CustomIcons'
import HeroBanner from '@/components/CustomUi/HeroBanner'
import ContactForm from '@/components/CustomUi/ContactForm'
const page = () => {
  return (
    <section className='container p-[2rem]'>
      <HeroBanner className=' bg-hero-home-banner' buttonText='Build your Brand'></HeroBanner>
    <div className='space-y-6 my-[50px] grid grid-cols-1  md:grid-cols-3'>
      <div className='space-y-6 '>
      <h1>H1 - Heading</h1>
      <h2>H2 - Heading</h2>
      <h3>H3 - Heading</h3>
      <h4>H4 - Heading</h4>
      <h5>H5 - Heading</h5>
      <h6>H6 - Heading</h6>
      <p>Paragraph</p>

      </div>
      
      <div className='flex flex-col flex-1 gap-8 w-min items-start'>
      <PrimaryButton className='to-white'>Primary button </PrimaryButton>
      <PrimaryButton className='to-white' icon={<ContactIcon/>}>Lets Chat</PrimaryButton>
      <SecondaryButton>Secondery Button</SecondaryButton>
      <SocialButton>Facebook</SocialButton>
      </div>

      <div className='w-fit p-7 h-fit bg-red-300 grid place-content-center gap-4'>
        <h5>With bg</h5>
      <PrimaryButton className="to-red-300">Primary button</PrimaryButton>
      </div>
    </div>    
    <div>
      <h1>Form</h1>
      <ContactForm />
    </div>
    </section>
  )
}

export default page