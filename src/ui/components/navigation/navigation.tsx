/** @format */

import React, { useEffect, useState } from "react";
import ActiveLink from "@/ui/components/navigation/active-link";
import Typography from "@/ui/design-system/typography/typography";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import Logo from "@/ui/design-system/logo/logo";
import ActiveLink1 from "./active-link1";
import Button from "@/ui/design-system/button/button";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(1);
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setNavVisible(false);
        } else {
          setNavVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -40,
      scale: 1
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        staggerChildren: 0.5,
        type: "spring",
      }
    }
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial="hidden"
      animate={navVisible ? "visible" : "hidden"}
      variants={navVariants}
      className="sticky top-0 left-0 right-0 z-50 border-b-2 border-transparent">
      <div className="flex items-stretch px-6 max-w-7xl mx-auto sm:px-0 min-h-[5rem] justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Main Navigation Wrapper */}
        <div className="hidden lg:flex flex-col justify-between w-full items-stretch">
          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-end items-center gap-7 bg-gray-300 px-2 h-full">
            <Typography
              variant="body3"
              className="space-x-4 text-sm sm:text-base md:text-lg lg:text-xl flex border-r-2 pe-4 border-transparent hover:border-black h-full items-center">
              <ActiveLink href="/#">Portrait et actualités</ActiveLink>
              <ActiveLink href="/#">Emplois</ActiveLink>
              <ActiveLink href="/#">Shop</ActiveLink>
            </Typography>
            <Typography
              variant="body3"
              className="h-full flex items-center pr-10 ">
              FR
            </Typography>
          </div>

          {/* Second Line Menu */}
          <div className="flex items-stretch justify-between pl-4 w-full h-full">
            <Typography
              variant="body3"
              className="space-x-4 flex pe-4 w-full h-full items-center">
              <ActiveLink1 href="/#">Horaire et réseau</ActiveLink1>
              <ActiveLink1 href="/#">Voyages et services</ActiveLink1>
              <ActiveLink1 href="/#">Offres de loisirs</ActiveLink1>
              <ActiveLink1 href="/#">Aide et contact</ActiveLink1>
            </Typography>
            <div className="border-l-2 border-transparent hover:border-black flex items-center px-4">
              <Button
                variant="ico"
                size="large"
                iconTheme="secondary"
                icon={{ icon: FaUser }}
                aria-label="Profil"
              />
            </div>
          </div>
        </div>
        {/* Mobile Icons */}
        <div className="flex items-center md:gap-3 pb-3 lg:hidden border-l-2 border-transparent hover:border-black ">
          <Typography>Menu</Typography>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 rounded-md hover:bg-gray-200 focus:outline-none"
            aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen pb-4" : "max-h-0"
        }`}>
        <div className="flex flex-col px-10">
          <div className="flex flex-col space-y-2">
            <ActiveLink1 href="/#">Horaire et réseau</ActiveLink1>
            <ActiveLink1 href="/#">Voyages et services</ActiveLink1>
            <ActiveLink1 href="/#">Offres de loisirs</ActiveLink1>
            <ActiveLink1 href="/#">Aide et contact</ActiveLink1>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
