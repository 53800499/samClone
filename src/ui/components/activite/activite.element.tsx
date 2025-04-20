/** @format */

import React from "react";
import Image from "next/image";
import Typography from "@/ui/design-system/typography/typography";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

interface ActiviteProps {
  src: string;
  titre: string;
  description: string;
  alt: string;
}

export default function ActiviteElement({
  src,
  description,
  titre,
  alt
}: ActiviteProps) {
  return (
    <Link
      href="/#"
      className="hover:border-shadow items-stretch  overflow-hidden">
      <div className="relative w-full h-44">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform"
          priority
        />
      </div>
      <div className="bg-gray-300 p-4 justify-center h-full">
        <Typography variant="h3" component="h3">
          {titre}
        </Typography>
        <Typography className="mb-4" variant="body1">
          {description}
        </Typography>
        <Typography
          variant="body3"
          className="flex justify-start space-x-4 items-center space-x-2">
          <GoArrowRight />
          <span> En savoir plus</span>
        </Typography>
      </div>
    </Link>
  );
}
