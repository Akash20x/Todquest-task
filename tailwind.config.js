/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      fontSize: {
        '14': '14px',
        '12': '12px',
      },
      colors: {
        'red-dark': '#F01C21',
        'blue-dark': '#091431',
        'slider-grey':'#D9D9D9',
        'black-primary': '#091431',
        'green-primary': '#3BA615',
        'grey-primary': '#878787',
        'grey-secondary':'#908F8F',
        'grey-light': '#747577'
      },
      fontFamily: {
        'metropolis': ['Metropolis', 'sans'],
        'montserrat': ['Montserrat', 'sans'],
        'manrope': ['Manrope', 'sans'],
      },
      borderRadius: {
        '32': '32px',
        '10': '10px',
      },
      boxShadow: {
        'tabs': '4px 4px 60px 0px #0000000A',
      },
    },
  },
  plugins: [],
}

