/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'primary': {
        100: '#82dbff',
        200: '#0b6fe5',
        300: '#507fae',
        900: '#022597'
      },
      'secundary': {
        100: '#F6FBFE',
        200: '#F0F5F8',
        300: '#F5F5F5'
      },
      'gray': {
        100: '#f7f8fe',
        200: '#b7b7b7',
        300: '#dddddd',
        800: '#8d8e93',
        900: '#323133'
      },
      'orange': {
        100: '#fff4e7',
        200: '#e68e7c',
        300: '#f59c0a',
        900: '#ff8e12'
      },
      'green': {
        100: '#e7f9f3',
        900: '#00c48b',
      },
      'pink': {
        200: '#f2b7ee',
      },
      'yellow':{
        400: '#eec036'
      },
      'regal-blue': {
        100: '#243c5a'
      },
      'white': '#FFFFFF',
      'black': '#000000',
      'red': {
        100: '#ffe6e9',
        800: '#fa4e59',
        900: '#ef4444',
      }
    },
    fontFamily: {
      'inter': ['"Inter"', 'cursive'],
    },
    fontSize: {
      xs: '10px',
      '2xs': '12px',
      sm: '14px',
      md: '18px',
      lg: '24px',
      'xl': '36px',
      '2xl': '42px'
    },
    borderWidth: {
      '3': '3px',
    },
    extend: {
      gradientColorStopPositions: {
        33: '33%',
      },
      width: {
        '20': '20px',
        '35': '35px',
        '50': '50px',
        '155': '155px',
        '188': '188px',
        '1920': '1920px',
      },
      height: {
        '20': '20px',
        '35': '35px',
        '50': '50px',
        '60': '60px',
        '65vh': '65vh',
        '85vh': '85vh',
        '90vh': '90vh',
      },
      maxWidth: {
        'medium': '90%',
      },
      margin: {
        '0-auto': '0 auto',
      },
      gridTemplateColumns:{
        'custom211': '1.5fr 1fr 1fr',
        'custom13': '1fr 3fr',
        'custom-filter': '0.5fr 1fr 1fr 1fr 0.8fr',
        'custom21': '2fr 1fr',
      },
     
    }

  },
  plugins: [],
}

