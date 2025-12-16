import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af', // Professional navy blue
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
        background: {
          empty: '#FCFCFC', // Off-white
          ivory: '#F0F9FF', // Light blue tint
          mallow: '#EFF6FF', // Very light blue
        },
        neutral: {
          athens: '#E5E7EB', // Light grey
          mineral: '#6B7280', // Medium grey for text
        },
      },
    },
  },
  plugins: [],
}
export default config


