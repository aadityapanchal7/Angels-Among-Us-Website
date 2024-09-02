import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'angel-blue': '#0599cb', 
        'grad-blue': '#36cad3',
        'navy-blue': '#092f55',
      },
    },
  },
  plugins: [],
};

export default config;
