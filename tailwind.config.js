/** @type {import('tailwindcss').Config} */

import { palettes, grays, rounded, components, animations, shade } from '@tailus/themer'
import { palettes } from "@tailus/themer-plugins"


module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tailus/themer/dist/components/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ...palettes.trust,
        gray: grays.neutral,
      },
    },
  },
  plugins: [shade, components, animations, rounded]
}
