"use"

import { useState, useEffect } from 'react';

// Define a type for the mouse position
interface MousePosition {
  x: number;
  y: number;
}

// Custom hook
const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    // Handler to call on mouse move
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Remove event listener on cleanup
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

export default useMousePosition;
