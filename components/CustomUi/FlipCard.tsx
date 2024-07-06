"use client"

import { CSSProperties, ReactNode, useState , forwardRef , Ref } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  children: ReactNode[];
    className?: string;
    style?:CSSProperties
}

const FlipCard: React.FC<FlipCardProps> = forwardRef ( ({ children , className , style } , ref : Ref<HTMLDivElement>) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const handleClick = async () => {
    if (isFlipped) {
      await controls.start({ rotateY: 0 });
    } else {
      await controls.start({ rotateY: -180});
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div ref={ref} className={cn("FlipCard perspective-1000 w-80 h-96 text-wrap", [
        className
    ])} 
    style={style}
    onClick={handleClick} >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d "
        animate={controls}
        initial={{ rotateY: 0 }}
        transition={{ duration: 0.8 , ease:"backInOut" }}
      >
        <div className="absolute w-full h-full backface-hidden">
          {children[0]}
        </div>
        <div className="absolute w-full h-full backface-hidden transform rotateY-180">
          {children[1]}
        </div>
      </motion.div>
    </div>
  );
}); 

const FrontCard: React.FC<{ children: ReactNode , className?: string , style?:CSSProperties  }> = ({ children , className , style }) => {
  return <div className={cn("FrontCard w-full h-full", [
    className
  ])} style={style}>{children}</div>;
};

const BackCard: React.FC<{ children: ReactNode , className?: string ,style?:CSSProperties }> = ({ children, className , style }) => {
  return <div className={cn("BackCard w-full h-full", [
    className
  ])} style={style}>{children}</div>;
};


FlipCard.displayName = 'FlipCard';

export { FlipCard , FrontCard , BackCard };