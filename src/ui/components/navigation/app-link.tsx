import { AppLinks,FooterLink } from "@/types/app-links";
import {
  RiLinkedinBoxFill,
  RiSlackFill,
  RiYoutubeFill,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill
} from "react-icons/ri";

export const voyageLinks: AppLinks[] = [
  {
    label: "Chercher une liaison",
    baseUrl: "/#",
    type: "internal"
  },
  {
    label: "Horaire et achat de billets",
    baseUrl: "/#",
    type: "internal"
  },
  {
    label: "Horaire par arrets",
    baseUrl: "/#",
    type: "internal"
  },
  {
    label: "Réseau de lignes",
    baseUrl: "/#",
    type: "external"
  },
  {
    label: "Infos trafic",
    baseUrl: "/#",
    type: "external"
  }
];
export const offreLinks: AppLinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com",
    type: "external",
    icon: RiYoutubeFill
  },
  {
    label: "LinkedIn",
    baseUrl: "http://www.linkedin.com",
    type: "external",
    icon: RiLinkedinBoxFill
  },
  {
    label: "slack",
    baseUrl: "http://www.slack.com",
    type: "external",
    icon: RiSlackFill
  }
];
export const horaireLinks: AppLinks[] = [
  {
    label: "Courses spéciales et course à la demande",
    baseUrl: "/",
    type: "internal"
  },
  {
    label: "Connexion",
    baseUrl: "/connexion",
    type: "internal"
  },
  {
    label: "Inscription",
    baseUrl: "/connexion/inscription",
    type: "internal"
  }
];

export const footerLinks: FooterLink[] = [
  {
    label: "Horaire et réseau",
    links: horaireLinks
  },
  {
    label: "Voyages et services",
    links: voyageLinks
  },
  {
    label: "Offres de loisirs",
    links: offreLinks
  }
];

export const footerSocialNetworksLinks: AppLinks[] = [
  {
    label: "Facebook",
    baseUrl: "https://www.facebook.com",
    type: "external",
    icon: RiFacebookFill
  },
  {
    label: "Twitter",
    baseUrl: "https://www.twitter.com",
    type: "external",
    icon: RiTwitterFill
  },
  {
    label: "Instagram",
    baseUrl: "https://www.instagram.com",
    type: "external",
    icon: RiInstagramFill
  }
];