/** @format */

import { FooterLink } from "@/types/app-links";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa";

export const footerLinks: FooterLink[] = [
  {
    label: "Portrait",
    links: [
      {
        label: "Page d’accueil",
        baseUrl: "/accueil",
        type: "internal"
      },
      {
        label: "Organisation",
        baseUrl: "/organisation",
        type: "internal"
      },
      { label: "Cor postal", baseUrl: "/car-postal", type: "internal" },
      {
        label: "Offres de loisirs",
        baseUrl: "/loisirs",
        type: "internal"
      },
      {
        label: "Aide et contact",
        baseUrl: "/aide-contact",
        type: "internal"
      },
      {
        label: "Portrait et actualités",
        baseUrl: "/portrait-actualites",
        type: "internal"
      }
    ]
  },
  {
    label: "Accéder à",
    links: [
      {
        label: "Formulaire de contact",
        baseUrl: "/contact",
        type: "internal"
      },
      { label: "Emplois", baseUrl: "/emplois", type: "internal" },
      { label: "Newsletter", baseUrl: "/newsletter", type: "internal" },
      { label: "Shop CarPostal", baseUrl: "/shop", type: "internal" },
      {
        label: "La Poste",
        baseUrl: "https://www.post.ch",
        type: "external"
      },
      {
        label: "Post Company Cars",
        baseUrl: "https://www.postcompanycars.ch",
        type: "external"
      }
    ]
  }

];

export const footerReseauData: FooterLink[] = [
  {
    label: "Suivez-nous",
    links: [
      {
        label: "Facebook",
        baseUrl: "https://www.facebook.com",
        type: "external",
        icon: FaFacebookF
      },
      {
        label: "Instagram",
        baseUrl: "https://www.instagram.com",
        type: "external",
        icon: FaInstagram
      },
      {
        label: "YouTube",
        baseUrl: "https://www.youtube.com",
        type: "external",
        icon: FaYoutube
      },
      {
        label: "LinkedIn",
        baseUrl: "https://www.linkedin.com",
        type: "external",
        icon: FaLinkedinIn
      }
    ]
  }
];
