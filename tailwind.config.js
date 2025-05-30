const { title } = require('process');
const { fontFamily } = require("tailwindcss/defaultTheme");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        'ssm': '537px',
        'sssm':'380px'
      },
      fontFamily: {
        heading1: ["Anton", fontFamily.sans],
        heading2: ["Phudu", "serif"],
        heading3: ["Grechen Fuemen", fontFamily.sans],
        heading4: ["DM Serif Display", fontFamily.sans],
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
    },
  },
  plugins: [],
}
