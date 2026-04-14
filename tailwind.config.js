/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        // Replaced Lora with Plus Jakarta Sans
        serif: ['"Plus Jakarta Sans"', 'sans-serif'], 
        sans: ['"Plus Jakarta Sans"', 'DM Sans', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0f1a1c',
          soft: '#1e2f33',
          muted: '#2d4248',
        },
        water: {
          DEFAULT: '#2563eb', 
          light: '#60a5fa',   
          pale: '#dbeafe',    
          faint: '#eff6ff',   
        },
        sand: {
          DEFAULT: '#f5efe6',
          dark: '#e8dcc8',
        },
        accent: '#c8832a',
      },
      typography: {
        DEFAULT: {
          css: {
            // Updated typography plugin to use Jakarta instead of Lora
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          },
        },
      },
    },
  },
  plugins: [],
}