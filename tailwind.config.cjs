/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section": "url('/public/hav_baggrund.jpg')",
        "hero-mobil": "url('/public/baggrund_mobil.jpg')",
      },

      // ...
      colors: {
        transparent: "transparent",
        current: "currentColor",
        roed: "#FF1054",
        tekstblaa: "#081F4D",
        morkblaa: "#153677",
        blaa: "#007CF9",
        lysblaa: "#EDF6FF",
        boelge: "#9DE6ED",
        white: "#ffffff",
      },

      fontFamily: {
        komu: ["komu-a", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        rubik: ["rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
