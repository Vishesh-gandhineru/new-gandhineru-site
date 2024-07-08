"use client"

import React from 'react'
import TeamCard from './TeamCard';
import {motion} from 'framer-motion'
import useDragScroll from '@/hooks/useDragScroll';

const TeamsSection = ({teams} :any) => {
    const ref = useDragScroll<HTMLDivElement>();
  return (
    <div ref={ref} className="flex gap-x-[20px] gap-y-[50px] overflow-x-scroll overflow-y-visible cursor-grab active:cursor-grabbing h-[450px] items-center hideScroll select-none">
    {teams.map((item: any) => {
      return <TeamCard key={item.id} team={item} />;
    })}
  </div>
  )
}

export default TeamsSection