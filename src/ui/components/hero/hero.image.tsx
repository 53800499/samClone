/** @format */

import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  layout: string;
  classNameImage?:string;
}

export default function HeroImage({ src, alt, className, layout, classNameImage }: Props) {
  return (
    <div className="flex items-center justify-center m-8">
      <div
        className={clsx(
          "relative flex items-center justify-center w-[260px] h-[300px]",
          className
        )}
      >
        {/* Arrière-plan superposé (effet d'ombre décalée) */}
        <div className="absolute -bottom-2 -right-2 w-[260px] h-[300px] bg-gray-300 rounded-md"></div>

        {/* Conteneur principal pour l'image */}
        <div className="relative w-[260px] h-[300px] bg-gray-200 rounded-md shadow-md">
          <Image
            src={src}
            alt={alt}
            layout={layout}
            objectFit="cover"
            className={clsx("rounded-md",classNameImage)}
          />
          {/* <Image
                src={src}
                alt={alt}
                layout="responsive"
                width={260}
                height={300}
                objectFit="cover"
                className=""
              /> */}
        </div>
      </div>
    </div>
  );
}
