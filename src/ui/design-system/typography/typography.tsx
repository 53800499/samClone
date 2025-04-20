/** @format */

import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "subTitle"
    | "body1"
    | "body2"
    | "body3"
    | "navTitle"
    | "navBodyTitle";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  theme?: "black" | "white" | "gray" | "primary" | "secondary";
  weight?: "regular" | "medium";
  className?: string;
  children: React.ReactNode /* 
  isLoading;
  iconTheme  */;
  animate?: boolean;
}

export default function Typography({
  children,
  variant = "h3",
  component: Component = "div",
  theme = "black",
  weight = "regular",
  className,
  animate = true
}: Props) {
  let variantStyle: string = "",
    colorStyle: string = "";

  switch (theme) {
    case "black":
      colorStyle = "text-gray-950";
      break;
    case "gray":
      colorStyle = "text-gray-700 dark:text-white";
      break;

    case "white":
      colorStyle = "text-white";
      break;

    case "primary":
      colorStyle = "text-primary-1";
      break;

    case "secondary":
      colorStyle = "text-gray-400";
      break;

    default:
      break;
  }

  switch (variant) {
    case "h1":
      variantStyle = "text-6xl md:text-7xl lg:text-8xl";
      break;
    case "h2":
      variantStyle = "text-4xl lg:text-5xl";
      break;
    case "h3":
      variantStyle = "text-2xl lg:text-3xl";
      break;
    case "subTitle":
      variantStyle = "text-lg lg:text-xl";
      break;
    case "body1":
      variantStyle = "text-body11 lg:text-body1";
      break;
    case "body2":
      variantStyle = "text-body2";
      break;
    case "navTitle":
      variantStyle = "text-navTitle";
      break;
    case "navBodyTitle":
      variantStyle = "text-navBodyTitle";
      break;
    case "body3":
      variantStyle = "text-body3";
      break;
  }

  const textContent = (
    <Component
      className={clsx(
        variantStyle,
        colorStyle,
        weight === "medium" && "font-medium",
        className,
        "text-pri"
      )}
    >
      {children}
    </Component>
  );

  if (!animate) {
    return textContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      {textContent}
    </motion.div>
  );
}
