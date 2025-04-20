/** @format */

import React from "react";
import Button from "@/ui/design-system/button/button";
import Typography from "@/ui/design-system/typography/typography";
import {
  RiCircleFill,
  RiGithubFill,
  RiLinkedinFill,
  RiMapFill,
  RiTwitterFill
} from "react-icons/ri";

export default function HeroElement() {
  const action = () => {
    alert(
      "Le site est en maintenance Contactez-moi par mes identifiant situé en bas"
    );
  };
  return (
    <div className=" gap-6">
      {/* Titre */}
      <Typography variant="h1" component="h1" className="mb-2">
        Je suis Sikirou BASSIROU
      </Typography>

      {/* Description */}
      <Typography variant="body2" className="text-justify">
        Je suis un développeur full stack (React.js & Node.js) spécialisé dans
        la création (et occasionnellement la conception) d{"'"}expériences
        numériques exceptionnelles, rapides, accessibles, visuellement
        attrayantes et responsives. Bien que je crée des applications web depuis
        plus de 4 ans, j{"'"}aime toujours cela comme si c{"'"}était une
        nouveauté.
      </Typography>

      {/* Informations supplémentaires */}
      <div className="flex flex-col gap-2 mt-8">
        <div className="flex items-center gap-2">
          <RiMapFill className="text-gray-500" />
          <Typography variant="body2">Calavi, Bénin</Typography>
        </div>
        <div className="flex items-center gap-2">
          <RiCircleFill className="text-primary-500" />
          <Typography variant="body2">
            Disponible pour de nouveaux projets
          </Typography>
        </div>
      </div>

      {/* Liens sociaux */}
      <div className="flex gap-4 mt-8">
        <Button
          variant="ico"
          size="small"
          iconTheme="accent"
          className="rounded p-2"
          aria-label="Visitez mes projets sur Github"
          baseUrl="https://www.linkedin.com/in/bassirou-sikirou-53800499/"
        >
          <RiGithubFill />
        </Button>
        <Button
          variant="ico"
          size="small"
          iconTheme="accent"
          className="rounded p-2"
          aria-label="En savoir plus sur LinkedIn"
          action={action}
        >
          <RiLinkedinFill />
        </Button>
        <Button
          variant="ico"
          size="small"
          iconTheme="accent"
          className="rounded p-2"
          aria-label="Suivez-moi sur Twitter"
          action={action}
        >
          <RiTwitterFill />
        </Button>
      </div>
    </div>
  );
}
