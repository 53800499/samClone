/** @format */

import React, { useEffect, useState } from "react";
import ActiveLink from "@/ui/components/navigation/active-link";
import Typography from "@/ui/design-system/typography/typography";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import Logo from "@/ui/design-system/logo/logo";
import ActiveLink1 from "./active-link1";
import Button from "@/ui/design-system/button/button";
import { motion, AnimatePresence } from "framer-motion";

function SimplifiedNav() {
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSmallLogo, setIsSmallLogo] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setNavVisible(false);
        } else {
          setNavVisible(true);
        }
        setIsSmallLogo(window.scrollY > 100);
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const navVariants = {
    hidden: {
      opacity: 0,
      y: -40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        type: "spring"
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate={navVisible ? "visible" : "hidden"}
      variants={navVariants}
      className="sticky top-0 left-0 right-0 z-50 bg-white border-b-2 border-transparent">
      <div className="flex items-stretch justify-between px-6 mx-auto bg-gray-50 max-w-7xl sm:px-0">
        {/* Logo */}
        <div className="flex items-stretch">
          <Logo size={isSmallLogo ? "small" : "normal"} />
        </div>

        {/* Second Line Menu */}
        <div className="flex items-stretch justify-between w-full h-full pl-4">
          <Typography
            variant="body3"
            className="flex items-center w-full h-full space-x-4 pe-4">
            <ActiveLink1 href="/#">Horaire et réseau</ActiveLink1>
            <ActiveLink1 href="/#">Voyages et services</ActiveLink1>
            <ActiveLink1 href="/#">Offres de loisirs</ActiveLink1>
            <ActiveLink1 href="/#">Aide et contact</ActiveLink1>
          </Typography>
          <div className="flex items-center px-4 border-l-2 border-transparent hover:border-black">
            <Button
              variant="ico"
              size="large"
              iconTheme="secondary"
              icon={{ icon: FaSearch }}
              aria-label="Profil"
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSimplifiedNav, setShowSimplifiedNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSmallLogo, setIsSmallLogo] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 100) {
          setShowSimplifiedNav(true);
        } else {
          setShowSimplifiedNav(false);
        }
        setIsSmallLogo(window.scrollY > 100);
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const navVariants = {
    hidden: {
      opacity: 0,
      y: -40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        type: "spring"
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <AnimatePresence>
        {!showSimplifiedNav && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
            className="sticky top-0 left-0 right-0 z-50 border-b-2 border-transparent">
            <div className="flex items-stretch px-6 max-w-7xl mx-auto sm:px-0 min-h-[5rem] justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Logo size={isSmallLogo ? "small" : "normal"} />
              </div>

              {/* Main Navigation Wrapper */}
              <div className="flex-col items-stretch justify-between hidden w-full lg:flex">
                {/* Desktop Menu */}
                <div className="items-center justify-end hidden h-full px-2 bg-gray-300 lg:flex gap-7">
                  <Typography
                    variant="body3"
                    className="flex items-center h-full space-x-4 text-sm border-r-2 border-transparent sm:text-base md:text-lg lg:text-xl pe-4 hover:border-black">
                    <ActiveLink href="/#">Portrait et actualités</ActiveLink>
                    <ActiveLink href="/#">Emplois</ActiveLink>
                    <ActiveLink href="/#">Shop</ActiveLink>
                  </Typography>
                  <Typography
                    variant="body3"
                    className="flex items-center h-full pr-10 ">
                    FR
                  </Typography>
                </div>

                {/* Second Line Menu */}
                <div className="flex items-stretch justify-between w-full h-full pl-4">
                  <Typography
                    variant="body3"
                    className="flex items-center w-full h-full space-x-4 pe-4">
                    <ActiveLink1 href="/#">Horaire et réseau</ActiveLink1>
                    <ActiveLink1 href="/#">Voyages et services</ActiveLink1>
                    <ActiveLink1 href="/#">Offres de loisirs</ActiveLink1>
                    <ActiveLink1 href="/#">Aide et contact</ActiveLink1>
                  </Typography>
                  <div className="flex items-center px-4 border-l-2 border-transparent hover:border-black">
                    <Button
                      variant="ico"
                      size="large"
                      iconTheme="secondary"
                      icon={{ icon: FaSearch }}
                      aria-label="Profil"
                    />
                  </div>
                </div>
              </div>
              {/* Mobile Icons */}
              <div className="flex items-center pb-3 border-l-2 border-transparent md:gap-3 lg:hidden hover:border-black ">
                <Typography>Menu</Typography>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-600 rounded-md hover:bg-gray-200 focus:outline-none"
                  aria-label="Toggle mobile menu">
                  {isMobileMenuOpen ? (
                    <FaTimes size={24} />
                  ) : (
                    <FaBars size={24} />
                  )}
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
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSimplifiedNav && <SimplifiedNav />}
      </AnimatePresence>
    </>
  );
}
