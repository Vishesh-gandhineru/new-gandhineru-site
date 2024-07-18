"use client"

import { useEffect, useLayoutEffect, useRef } from 'react';
import Tempus from '@darkroom.engineering/tempus'
import Lenis from 'lenis'

import { usePathname, useSearchParams } from 'next/navigation';

export default function SmoothScroller() {
const lenis = useRef<Lenis | null>(null);
const pathname = usePathname();
const searchParams = useSearchParams();

useEffect(() => {
if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
}, [pathname, searchParams, lenis]);

useLayoutEffect(() => {
  lenis.current = new Lenis({
  smoothWheel: true,
  // Customize other instance settings here
  easing: (x) => 1 - Math.pow(1 - x, 3),
  });

  const resize = setInterval(() => {
    lenis.current!.resize();
  }, 150);

  function onFrame(time: number) {
    lenis.current!.raf(time);
  }

  const unsubscribe = Tempus.add(onFrame);

  return () => {
    unsubscribe();
    clearInterval(resize);
    lenis.current!.destroy();
    lenis.current = null;
  };

}, []);

return null;
}