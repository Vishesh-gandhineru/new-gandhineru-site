"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import TransitionLink from '@/components/Animations/TransitionLink';

type ServiceSideBarProps = {
  className?: string;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>
};

const ServiceSideBar = ({ className , activeSection , setActiveSection  }: ServiceSideBarProps) => {
 
  
  const [linkPosition, setLinkPosition] = useState<{ top: number; height: number } | null>(null);

  const handleActiveLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const links = document.querySelectorAll('.serviceSideBar a');
    links.forEach((link) => {
      link.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = document.querySelector('.serviceSideBar')!.getBoundingClientRect();
    setLinkPosition({ top: (rect.top - containerRect.top) + 8, height: rect.height });
  };

  useEffect(() => {
    const links = document.querySelectorAll('.serviceSideBar a');
    links.forEach((link) => {
      link.addEventListener('click', handleActiveLink as unknown as EventListener);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleActiveLink as unknown as EventListener);
      });
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('.serviceSideBar a');
    links.forEach((link) => {
      link.classList.remove('active');
    });

    const activeLink = document.querySelector(`.serviceSideBar a[href="#${activeSection}"]`);
    activeLink?.classList.add('active');

    const rect = activeLink?.getBoundingClientRect();
    const containerRect = document.querySelector('.serviceSideBar')!.getBoundingClientRect();
    setLinkPosition({ top: (rect!.top - containerRect.top) + 8, height: rect!.height });
  }, [activeSection]);

  return (
    <div className={cn("serviceSideBar relative justify-start flex flex-col gap-4 h-fit text-base text-[#C7C7C7]", [className])}>
      <Link href="#overview" className="active" onClick={handleActiveLink}>Overview</Link>
      <Link href="#why" onClick={handleActiveLink}>Why</Link>
      <Link href="#coverages" onClick={handleActiveLink}>Coverages</Link>
      <Link href="#process" onClick={handleActiveLink}>Process</Link>
      <Link href="#relevant-projects" onClick={handleActiveLink}>Relevant Projects</Link>
      <Link href="#testimonials" onClick={handleActiveLink}>Testimonials</Link>
      <Link href="#faqs" onClick={handleActiveLink}>FAQs</Link>
     
        <motion.span
          initial={{ y: 8 }}
          animate={{ y: linkPosition?.top }}
          transition={{ duration: 0.5, type: "spring"  , stiffness: 100, damping: 10 , mass: 0.5 , ease: "easeInOut"}}
          className="w-2 h-2 bg-primary rounded-full absolute right-[calc(100%+20px)]"
        />
    
    </div>
  );
};

export default ServiceSideBar;
