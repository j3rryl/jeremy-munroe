const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(0,128,128)", // Teal DEFAULT
          100: "#E6FFFF", // Teal 100
          200: "#CCF7F6", // Teal 200
          300: "#B2EEED", // Teal 300
          400: "#85DDDB", // Teal 400
          500: "#008080", // Teal 500
          600: "#007373", // Teal 600
          700: "#006666", // Teal 700
          800: "#004D4D", // Teal 800
          900: "#002E2E", // Teal 900
        },
        button: "rgb(50,136,124)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
