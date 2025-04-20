/** @format */

import Layout from "@/ui/components/layout/layout";
import Seo from "@/ui/components/seo/seo";
import React from "react";
import FormulaireContainer from "@/ui/components/formulaireAccueil/formulaire.container";
import CarPostalContainer from "@/ui/components/carPostal/carPostal.container";
import ActiviteContainer from "@/ui/components/activite/activite.container";
import NewsLetter from "@/ui/components/newLetter/newsLetter";
import FooterContainer from "@/ui/components/footer/footer.container";

export default function Home() {
  return (
    <>
      <Seo title="Page" description="Description" />
      <Layout isDisplayCreadCrumbs={false}>
        <FormulaireContainer />
        <CarPostalContainer />
        <ActiviteContainer />
        <NewsLetter />
        {/* <HeroContainer />*/}
        <FooterContainer />
      </Layout>
    </>
  );
}
