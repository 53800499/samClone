/** @format */

import React from "react";
import Container from "../container/container";
import Typography from "@/ui/design-system/typography/typography";
import Link from "next/link";
import FooterNavContainer from "./footerNav.Container";

export default function FooterContainer() {
  const currentYear = new Date().getFullYear();
  const liste = [
    { label: "Accessibilité", link: "#" },
    { label: "Conditions générales", link: "#" },
    { label: "Protection des données et informations légales", link: "#" },
    { label: "Mentions légales", link: "#" },
    { label: "Configurations des cookies", link: "#" }
  ];
  return (
    <div className="">
      <FooterNavContainer />
      <Container className="space-y-11 pb-4 px-2">
        <div className="flex items-center justify-start">
          <Typography
            variant="navTitle"
            theme="gray"
            className="gap-4 md:flex ">
            {`@ ${currentYear} CarPostal SA `}
            {"  "}
            {liste.map((item) => (
              <Link
                href={item.link}
                key={item.label}
                className="hover:font-bold flex ">
                <Typography className="hover:font-bold" variant="body3">
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Typography>
        </div>
      </Container>
    </div>
  );
}
