/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4B3DFE',
        'secondary': '#FF6B57',
        'neutral': '#FCFCFD',
        'neutral2': '#DDDDE1',
        'neutral-darker': '#565658',
        'neutral-normal': '#F5F6FA'

      },
      fontSize: {
        'xxs': ['0.5rem',{ // 8px
          lineHeight: '0.625rem', // 10px
        }],
        '2xs': ['0.625rem', { // 10px
          lineHeight: '0.75rem', // 12px
        }],
      }
      
    },
  },
  plugins: [],
}


