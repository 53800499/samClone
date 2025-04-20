/** @format */

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  size?: "small" | "normal";
}

export default function Logo({ size = "normal" }: LogoProps) {
  const logoVariants = {
    small: {
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    normal: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const dimensions = {
    small: {
      size: 65
    },
    normal: {
      size: 90
    }
  };

  const currentSize = dimensions[size].size;

  return (
    <motion.div
      animate={size}
      variants={logoVariants}
      className="flex items-stretch justify-center">
      <svg
        width={currentSize}
        height={currentSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        {/* Fond jaune */}
        <rect width="100" height="100" fill="#FFD700" />

        {/* Croix rouge */}
        <path
          d="M15 25 L15 35 L25 35 L25 45 L15 45 L15 55 L25 55 L25 35 L35 35 L35 25 L25 25 L25 15 L15 15 L15 25Z"
          fill="#FF0000"
        />

        {/* Lettre P en noir */}
        <path
          d="M50 20 L50 80 M50 20 L75 20 C85 20 85 25 85 30 L85 40 C85 45 85 50 75 50 L50 50"
          stroke="black"
          strokeWidth="15"
          strokeLinecap="butt"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}
