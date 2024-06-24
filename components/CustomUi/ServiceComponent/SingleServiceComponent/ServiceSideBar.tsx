"use client"

import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import { cn } from '@/lib/utils'

type ServiceSideBarProps = {
    className?: string

}

const ServiceSideBar = ({className} : ServiceSideBarProps) => {
  return (
    <div className={cn("serviceSideBar flex flex-col gap-4 h-fit px-5 text-base text-[#C7C7C7]", [
        className,

    ])}>
            <Link href="#overview" className=' text-primary'>Overview</Link>
            <Link href="#why">Why</Link>
            <Link href="#coverages">Coverages</Link>
            <Link href="#process">Process</Link>
            <Link href="#faqs">FAQs</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#relevant-projects">Relevant Projects</Link>
            <span className='w-2 h-2 bg-primary rounded-full absolute left-0 top-2' />
        </div>
  )
}

export default ServiceSideBar