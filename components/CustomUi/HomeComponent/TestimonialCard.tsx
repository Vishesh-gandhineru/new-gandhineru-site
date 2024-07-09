"use client"

  import Image from "next/image"



import React, { useState } from 'react'
import ShflleCard from "../ShflleCard";

type Item = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const TestimonialCard = () => {

  const [content, setContent] = useState<Item[]>([
    {
      id: 1,
      title: "Vishesh",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lectus sed eros tempus imperdiet.",
      image: '/Images/compony logo.png'
    },
    {
      id: 2,
      title: "Dishank",
      description: "Lorem ipsum dolor  Sed cursus lectus sed eros tempus imperdiet. sit amet, consectetur adipiscing elit.",
      image: '/Images/compony logo.png'
    },
    {
      id: 3,
      title: "Neha",
      description: "sit amet, consectetur adipiscing elit. sit amet, consectetur adipiscing elit.",
      image: '/Images/compony logo.png'
    },
    {
      id: 4,
      title: "Name",
      description: "Lorem ipsum dolor  Sed cursus lectus sed eros tempus imperdiet. sit amet, consectetur adipiscing elit.",
      image: '/Images/compony logo.png'
    },
    {
      id: 5,
      title: "Full Name",
      description: "Lorem ipsum dolor  Sed cursus lectus sed eros tempus imperdiet. sit amet, consectetur adipiscing elit.",
      image: '/Images/compony logo.png'
    },
  ]);

  return (

      <ShflleCard content={content} setContent={setContent} />


  )
}

export default TestimonialCard