import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 40s ease-in-out infinite",
        "aurora-reverse": "aurora-reverse 45s ease-in-out infinite",
        "aurora-slow": "aurora-slow 50s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.4",
          },
          "33%": {
            transform: "translate(-120px, 80px) scale(1.1)",
            opacity: "0.6",
          },
          "66%": {
            transform: "translate(-60px, 40px) scale(1.15)",
            opacity: "0.5",
          },
        },
        "aurora-reverse": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.3",
          },
          "33%": {
            transform: "translate(90px, -60px) scale(1.12)",
            opacity: "0.5",
          },
          "66%": {
            transform: "translate(45px, -30px) scale(1.18)",
            opacity: "0.4",
          },
        },
        "aurora-slow": {
          "0%, 100%": {
            transform: "translate(0, 0) rotate(0deg) scale(1)",
            opacity: "0.2",
          },
          "33%": {
            transform: "translate(60px, 40px) rotate(60deg) scale(1.1)",
            opacity: "0.3",
          },
          "66%": {
            transform: "translate(-40px, -50px) rotate(120deg) scale(1.05)",
            opacity: "0.25",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

