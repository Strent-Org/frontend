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
        'primary-50': '#EDECFF',
        'secondary': '#FF6B57',
        'neutral': '#FCFCFD',
        'neutral2': '#DDDDE1',
        'neutral-darker': '#565658',
        'neutral-normal': '#F5F6FA',
        'secondary-500': '#FF6B57',
        'green-450': '#60D669'


      },
       boxShadow: {
        'md-penumbra-6': '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
      },
      fontSize: {
        'xxs': ['0.5rem',{ // 8px
          lineHeight: '0.625rem', // 10px
        }],
        '2xs': ['0.625rem', { // 10px
          lineHeight: '0.75rem', // 12px
        }],
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}


