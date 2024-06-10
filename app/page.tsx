import React from 'react'
import { Button } from '@/components/ui/button'
import { PrimaryButton } from '@/components/CustomUi/CustomButton'

const page = () => {
  return (
    <div className='p-12 space-y-6'>
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <h6>H6</h6>
      <p>Paragraph</p>
      
      <div className='flex flex-col flex-1 gap-3 w-min items-start'>
      <PrimaryButton>Primaery Button</PrimaryButton>
      <Button variant="secondary" size="secondary">Button Secondary</Button>
      </div>
    </div>
  )
}

export default page