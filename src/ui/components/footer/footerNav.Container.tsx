/** @format */

import React from "react";
import Container from "../container/container";
import ListeFooter from "@/ui/components/Liste/listeFooter";
import { footerLinks } from "./footerData";
import Typography from "@/ui/design-system/typography/typography";

export default function FooterNavContainer() {
  return (
    <div>
      <Container className="my-8 grid grid-cols-1 md:grid-cols-2">
        <ListeFooter
          data={footerLinks}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
          <div className="space-y-1 me-4">
            <div className="border-b-2  ">
              <Typography variant="navTitle" className="pb-4">
                Service à la clientèle
              </Typography>
              <Typography
                component="span"
                variant="navBodyTitle"
                className="pb-16">
                +41 (0)848 818 818
              </Typography>
              <Typography component="span" variant="body3">
                CHF 0.08/min.
              </Typography>
            </div>
            <div className="border-b-2 pb-2 pt-2">
              <Typography variant="navTitle" component="span" className="pb-16">
                Du lundi au vendredi
              </Typography>
              <Typography component="span" variant="navBodyTitle">
                7h00–19h00
              </Typography>
            </div>
            <div className="border-b-2 pb-2 pt-2">
              <Typography variant="navTitle" component="span" className="pb-16">
                Du samedi au dimanche
              </Typography>
              <Typography component="span" variant="navBodyTitle">
                9h00–17h00
              </Typography>
            </div>
            <div className="pt-2">
              <Typography variant="navTitle" component="span" className="pb-16">
                Grisons
              </Typography>
              <Typography component="span" variant="navBodyTitle">
                7 jours, 24 heures
              </Typography>
            </div>
          </div>
          <div>
            <div className="">
              <Typography variant="navTitle" component="span" className="space-y-1">
                Adresse
              </Typography>
              <Typography component="span" variant="navBodyTitle">
                CarPostal SA
              </Typography>
              <Typography component="span" variant="navBodyTitle">
                Wankdorfallee 4
              </Typography>
              <Typography component="span" variant="navBodyTitle">
                3030 Berne
              </Typography>
            </div>
            <div className="mt-10">
              <Typography variant="navTitle" component="span" className="pb-16">
                Suivez-nous
              </Typography>
                           {/* <div>{footerReseauData.map((item) => (
                  affiche les icone 
              ))}</div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
