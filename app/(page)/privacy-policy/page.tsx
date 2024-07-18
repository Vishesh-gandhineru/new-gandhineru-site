import TransitionLink from '@/components/Animations/TransitionLink'
import HeroBanner from '@/components/CustomUi/HeroBanner'
import { FadeInSection } from '@/components/CustomUi/MotionDiv'
import React from 'react'

const page = () => {
  return (
    <main>
    <FadeInSection>
    <HeroBanner
      buttonHref="/contact"
      className=" bg-hero-contact-banner container"
      buttonText="Book a Clarity Call"
    ></HeroBanner>
    </FadeInSection>
  <FadeInSection className="sectionContainer">
  <h1>Privacy Policy</h1>
  <div className='mt-5 space-y-3'>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque placeat illo esse dolorem eveniet nulla similique libero expedita fugiat repellat nihil non ad quod, qui eligendi quaerat ipsam asperiores?</p>
    </div>
  </FadeInSection>
  
  </main>
  )
}

export default page