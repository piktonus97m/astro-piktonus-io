/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            p: {
              code: {
                backgroundColor: "#222222",
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "400",
              },
            },
            li: {
              code: {
                backgroundColor: "#222222",
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "400",
              },
            },
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
