/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {},
  colors: {
    'dark-blue': '#3C3C3B',
    'primary-blue': '#02052E',
    'primary-green': '#34C3B1',
    'secondary-green': '#78C9BF',
  },
  fontFamily: {
    'Lato': ['Lato', 'sans-serif'],
    'Monsterrat': ['Montserrat', 'sans-serif']
  },
  plugins: [
    require('flowbite/plugin')
  ],
};