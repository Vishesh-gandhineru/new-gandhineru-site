"use client"

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type StickyMenuProps = {
    className: string
}

const StickyMenu = ({ className }: StickyMenuProps) => {
    const { scrollY } = useScroll();
    const [background, setBackground] = useState("rgba(255, 255, 255, 0)");

    useEffect(() => {
        return scrollY.on("change",(latest) => {
            if (latest > 1) {
                setBackground("rgba(255, 255, 255, 1)");
            } else {
                setBackground("rgba(255, 255, 255, 0)");
            }
        });
    }, [scrollY]);

    return (
        <motion.div
            initial={{ background: "rgba(255,255,255,0)" }}
            animate={{ background }}
            className={className}
        />
    )
}

export default StickyMenu
