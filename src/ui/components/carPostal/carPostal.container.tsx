/** @format */

import React from "react";
import Image from "next/image";
import Typography from "@/ui/design-system/typography/typography";
import Container from "../container/container";
import CarPostalElement from "./carPostal.element";

export default function CarPostalContainer() {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 items-center py-16 max-h-screen px-8">
      <div className="space-y-4 bg-gray-100 p-8 h-full">
        <Typography variant="h1">CarPostal relie toute la Suisse</Typography>
        <CarPostalElement />
      </div>

      <div className="relative w-full h-full overflow-hidden">
        <Image
          src="/assets/images/image.png"
          alt="Bus CarPostal roulant en Suisse"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform"
          priority
        />
      </div>
    </Container>
  );
}
