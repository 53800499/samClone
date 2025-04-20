/** @format */

import React from "react";
import { ActiviteData } from "./activite.data";
import ActiviteElement from "./activite.element";
import Container from "../container/container";
import { v4 as uuidv4 } from "uuid";
import Typography from "@/ui/design-system/typography/typography";

export default function ActiviteContainer() {
  const activite = ActiviteData.map((data) => 
      (<ActiviteElement
        key={uuidv4()}
        src={data.src}
        alt={data.alt}
        description={data.description}
        titre={data.titre}
      />)
  );
    return (
      <Container className="px-8">
        <Typography className="grid grid-cols-1 m:grid-cols-2 lg:grid-cols-3 gap-4 justify-center gap-6 my-10">
          {activite}
        </Typography>
      </Container>
    );
}
