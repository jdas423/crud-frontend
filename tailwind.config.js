/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'bg-img': "url('/images/bg.jpg')",
      },
      colors:{
        "dark-blue":"#2d3250",
        "light-blue":"#424769",
        "deeppink":"deeppink",
      }
    },
  },
  plugins: [],
}

