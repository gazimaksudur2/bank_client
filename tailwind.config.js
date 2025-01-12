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
        'cta': "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      }
    },
  },
plugins: [daisyui],
}

