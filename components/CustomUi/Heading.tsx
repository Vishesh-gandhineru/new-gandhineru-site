import { cn } from '@/lib/utils'
import React from 'react'

type HeadingProps = {
    Heading : string,
    subHeading : string
    className? : string
    
}

const Heading = ({Heading , subHeading, className} : HeadingProps) => {
  return (
    <div className={cn(" flex flex-col gap-3", [
        className
    ])}>
          <p className="text-[20px] leading-[30px] tracking-normal">
            {subHeading}
          </p>
          <h3>{Heading}</h3>
        </div>
  )
}

export default Heading