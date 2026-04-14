/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0f1a1c',
          soft: '#1e2f33',
          muted: '#2d4248',
        },
        water: {
          DEFAULT: '#2563eb', // mapped to blue-600
          light: '#60a5fa',   // mapped to blue-400
          pale: '#dbeafe',    // mapped to blue-100
          faint: '#eff6ff',   // mapped to blue-50
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
            fontFamily: 'Lora, Georgia, serif',
          },
        },
      },
    },
  },
  plugins: [],
}