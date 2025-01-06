/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      fontFamily:{
        poppins: '"Poppins", sans-serif',
      },
      backgroundImage: {
       	'hero-pattern': "url('/img/hero-pattern.svg')",
       	'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
plugins: [daisyui],
}

