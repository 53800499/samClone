/** @format */

import React from "react";
import AboutElement from "./hero.element";
import AboutImage from "./hero.image";
import clsx from "clsx";
import Container from "../container/container";
import ScrollReveal from "@/ui/design-system/scroll-reveal/scroll-reveal";

export default function HeroContainer({
  imageSrc = "/assets/images/profile.jpg",
  imageAlt = "profile",
  imageLayout = "fill"
}) {
  return (
    <Container
      className={clsx(
        "flex flex-col md:flex-row items-center justify-center min-h-screen px-8"
      )}>
      <ScrollReveal
        direction="left"
        delay={0.2}
        distance={100}
        rotate={10}
        scale={1.1}
        spring={true}>
        <AboutImage
          src={imageSrc}
          alt={imageAlt}
          layout={imageLayout}
          className="block transition-all duration-300 ease-in-out rounded-lg shadow-lg hover:scale-105 md:order-2 md:hidden"
        />
      </ScrollReveal>

      <ScrollReveal
        direction="up"
        delay={0.1}
        distance={80}
        rotate={5}
        scale={1.05}
        spring={true}>
        <AboutElement />
      </ScrollReveal>
    </Container>
  );
}
