"use client"

import React, { useState, useEffect } from 'react';
import useWindowSize from '@/hooks/useWindowsize';


export default function HeroImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const images = [
    isMobile ? "/Images/hero-home-mob-banner.png" : "/Images/Home-page-banner.webp",    
    isMobile ? "/Images/home-banner-2-mob.png" : "/Images/hero-banner-2.png",
    isMobile ? "/Images/hero-banner-3-mob.png" : "/Images/home-banner-3.png", 
     
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // 0.5 second for fade transition
    }, 5000); // 5 seconds between transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" absolute w-full h-[550px] md:h-[500px] lg:h-[640px] overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] pointer-events-none">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out rounded-[30px]
            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
            ${isTransitioning && index === nextImageIndex ? 'opacity-100' : ''}
          `}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
}