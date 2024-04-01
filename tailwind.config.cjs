/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      // ...
      colors: {
        transparent: "transparent",
        current: "currentColor",
        roed: "#FF1054",
        tekstblaa: "#ff784f",
        morkblaa: "#153677",
        blaa: "#007CF9",
        lysblaa: "#EDF6FF",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
