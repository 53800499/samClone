// Description: Tailwind CSS configuration file
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Activer le mode sombre basé sur la classe
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      "8xl": [
        "40px",
        {
          lineHeight: "50px",
          letterSpacing: "(-1%)",
          fontWeight: "550"
        }
      ],
      "7xl": [
        "38px",
        {
          lineHeight: "45px",
          letterSpacing: "(-2%)",
          fontWeight: "550"
        }
      ],
      "6xl": [
        "36px",
        {
          lineHeight: "35px",
          letterSpacing: "(-2%)",
          fontWeight: "550"
        }
      ],
      /* hAEDING H2 */
      "5xl": [
        "36px",
        {
          lineHeight: "40px",
          letterSpacing: "(-0.5px)",
          fontWeight: "350"
        }
      ],
      "4xl": [
        "34px",
        {
          lineHeight: "38px",
          letterSpacing: "-1.2px",
          fontWeight: "350"
        }
      ],
      /* Heading H3 */
      "3xl": [
        "28px",
        {
          lineHeight: "36px",
          letterSpacing: "-0.1px",
          fontWeight: "500"
        }
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "32px",
          letterSpacing: "-1px",
          fontWeight: "500"
        }
      ],
      /* Subtitle */
      xl: [
        "20px",
        {
          lineHeight: "28px",
          letterSpacing: "-0.2px",
          fontWeight: "350"
        }
      ],
      lg: [
        "18px",
        {
          lineHeight: "28px",
          letterSpacing: "-0.8px",
          fontWeight: "350"
        }
      ],
      /* Body1 */
      body1: [
        "25px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.6px",
          fontWeight: "350"
        }
      ],
      body3: [
        "14px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.1px",
          fontWeight: "350"
        }
      ],
      /* body2 */
      body2: [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.3px",
          fontWeight: "350"
        }
      ],
      /* navTitle */
      navTitle: [
        "18px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.3px",
          fontWeight: "500"
        }
      ],
      /* navTitle */
      navBodyTitle: [
        "18px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.3px",
          fontWeight: "350"
        }
      ]
    },
    colors: {
      yellow: "#FCCD2A",  
      primary: {
        500: "#10b981"
      },
      secondary: {
        200: "#eaf8f4",
        300: "#bfe9de",
        400: "#56c4a7",
        DEFAULT: "#2AB691",
        600: "#26a482"
      },
      gray: {
        DEFAULT: "##ffffff",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#F3F0EEFF",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712"
      }
    },
    borderRadius: {
      DEFAULT: "10px",
      full: "9999px"
    },
    fontWeight: {
      DEFAULT: "400",
      bold: "600"
    },
    keyframes: {
      float: {
        "0%, 100%": { transform: "translateY(0)" }, // Position initiale et finale
        "50%": { transform: "translateY(-10px)" } // Décalage vers le haut
      }
    },
    animation: {
      float: "float 3s ease-in-out infinite" // Durée, easing et répétition infinie
    },
    extend: {}
  },
  plugins: []
};

