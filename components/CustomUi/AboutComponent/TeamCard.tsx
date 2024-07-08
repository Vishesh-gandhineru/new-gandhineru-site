"use client"

import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

type TeamCardProps = {
    team: Record<string, any>
}

const TeamCard = ({team} : TeamCardProps) => {

    const {title , meta} = team;    
    const {front_image , ai_image , designation } = meta;

  return (
    <div className='teamCard space-y-3'>
        <div className=' relative grid place-content-center'>
            <div className=' relative w-[220px] h-[290px] z-10'>
            <Image src={front_image} alt={`${title} personal image`} fill sizes='2x' className='object-cover object-center hover:opacity-0 transition-all ease-in-out duration-300'/>
            </div>
            <div className=' absolute w-[220px] h-[290px] top-[50%] left-[50%] translate-y-[-50%] -translate-x-1/2 z-1'>
            <Image src={ai_image} alt={`${title} ai image`} fill sizes='2x' className='object-cover object-center'/>
            </div>
           
        </div>
        <div className='text-center'>
        <h3>{title.rendered}</h3>
        <h4>{designation}</h4>
        </div>
    </div>
  )
}

export default TeamCard