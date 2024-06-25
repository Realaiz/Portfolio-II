import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "darknavy": "#091c32",
        "lightblue": "#d1e3f9",
        "riverblue": "#9cc7d8",
        "cream": "#f8e7d2",
        "darkrock": "#242b31",
      },
      backdropBlur: {
        "4xl": "1px",
      },
    },
  },
  plugins: [],
};
export default config;
