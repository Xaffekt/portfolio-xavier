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
    },
    colors: {
      transparent: 'transparent',
      dark: {
        'text': '#eee8e2',
        'background': '#13100b',
        'primary': '#413425',
        'secondary': '#1a150f',
        'accent': '#9b7e58',
      },
      light: {
        'text': '#13100b',
        'background': '#eee8e2',
        'primary': '#413425',
        'secondary': '#e9e1d8',
        'accent': '#392f20',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
