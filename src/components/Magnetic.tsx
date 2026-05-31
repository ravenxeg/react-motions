"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, HTMLMotionProps } from "motion/react";

export interface MagneticProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  range?: number;
  strength?: number;
}

export function Magnetic({
  children,
  range = 60,
  strength = 0.35,
  ...props
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate distance from element's center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Check if within magnetic range
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    if (distance < range) {
      setPosition({ x: distanceX * strength, y: distanceY * strength });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const springOptions = { damping: 15, stiffness: 150, mass: 0.1 };
  const xSpring = useSpring(0, springOptions);
  const ySpring = useSpring(0, springOptions);

  useEffect(() => {
    xSpring.set(position.x);
    ySpring.set(position.y);
  }, [position, xSpring, ySpring]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: xSpring,
        y: ySpring,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
