/** @format */

import Image from "next/image";
import React from "react";
import clsx from "clsx";
interface Props {
  size?: "medium" | "small" | "large";
  src:string;
  alt: string;
}
export default function Avatar({ size = "medium", src, alt }: Props) {
  let sizeStyles: string;
  switch (size) {
    case "small":
      sizeStyles = "w-[24px] h-[24px]";
      break;
    case "medium":
      sizeStyles = "w-[34px] h-[34px]";
      break;
    case "large":
      sizeStyles = "w-[50px] h-[50px]";
      break;
  }
  return (
    <div className={clsx(sizeStyles, 'bg-gray-400 rounded-full relative')}>
      <Image
      fill src={src} alt={alt} className="object-cover object-center rounded-full"
      />
    </div>
  );
}
