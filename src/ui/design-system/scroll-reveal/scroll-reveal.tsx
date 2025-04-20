import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  distance?: number;
  rotate?: number;
  scale?: number;
  opacity?: number;
  spring?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.8,
  distance = 50,
  rotate = 0,
  scale = 1,
  opacity = 1,
  spring = true
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialPosition = () => {
    const base = { opacity: 0, scale: 0.95 };
    switch (direction) {
      case "up":
        return { ...base, y: distance, rotateX: -rotate };
      case "down":
        return { ...base, y: -distance, rotateX: rotate };
      case "left":
        return { ...base, x: distance, rotateY: -rotate };
      case "right":
        return { ...base, x: -distance, rotateY: rotate };
      default:
        return { ...base, y: distance };
    }
  };

  const getAnimatePosition = () => {
    return {
      opacity: opacity,
      scale: scale,
      y: 0,
      x: 0,
      rotateX: 0,
      rotateY: 0,
      transition: spring ? {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay,
        duration: duration
      } : {
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    };
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      className={className}
      style={{
        transformPerspective: 1000,
        transformStyle: "preserve-3d"
      }}
    >
      {children}
    </motion.div>
  );
} 