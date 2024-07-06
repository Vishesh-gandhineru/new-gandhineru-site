import { useState, useRef, useEffect } from 'react';

const useDragScroll = <T extends HTMLElement>() => {
    const containerRef = useRef<T | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseDown = (e: MouseEvent) => {
            setIsDragging(true);
            setStartX(e.pageX - container.offsetLeft);
            setScrollLeft(container.scrollLeft);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !container) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 3; // Adjust scrolling speed
            container.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mouseleave', handleMouseUp);

        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mouseleave', handleMouseUp);
        };
    }, [isDragging, startX, scrollLeft]);

    return containerRef;
};

export default useDragScroll;