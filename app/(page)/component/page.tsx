import React from 'react'
import { PrimaryButton , SecondaryButton, SocialButton } from '@/components/CustomUi/CustomButton'
import { ContactIcon } from '@/components/CustomIcons'
import HeroBanner from '@/components/CustomUi/HeroBanner'
import ContactForm from '@/components/CustomUi/ContactForm'
import DemoBlogPost from '@/utils/DemoBlogPost';
import BlogCard from '@/components/CustomUi/BlogCard'


const page = () => {
  return (
    <section>  
      <HeroBanner className=' bg-hero-home-banner' buttonText='Build your Brand'><div>
        <h1>Simply put, we design
and build brands</h1>
<p className=' font-light'>Driven by visuals, tech and automation</p>
        </div></HeroBanner>
      <div className='my-12 flex gap-3 items-center'>
        <h2>Nav link :</h2>
      <PrimaryButton className='to-white' href='/about'>About </PrimaryButton>
      <PrimaryButton className='to-white' href='/services'>Services</PrimaryButton>
      <PrimaryButton className='to-white' href='/work'>Work </PrimaryButton>
       
      </div>
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
  <div className=' grid grid-cols-4 gap-x-8 gap-y-10 w-[1190px]'>
    {DemoBlogPost.map((post , index) => {
      return(
        <BlogCard key={index} title={post.title} image={post.image} readTime={post.readTime} date="" slug={post.title}/>
      )
    })} 
  </div>    


    <div>
      <h1>Form</h1>
      <ContactForm />
    </div>
    </section>
  )
}

export default page