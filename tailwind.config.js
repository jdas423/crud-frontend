/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'bg-img': "url('./src/images/bg.jpg')",
        "slideshow1": "url('./src/images/slideshow1.jpg')",
        "slideshow2":"url('./src/images/slideshow2.jpg')",
        "slideshow3":"url('./src/images/slideshow3.jpg')",
        "slideshow4":"url('./src/images/slideshow4.jpg')",
        "slideshow5":"url('./src/images/slideshow5.jpg')",
        "mis1":"url('./src/images/slideshow5.jpg')",
        "mis2":"url('./src/images/slideshow5.jpg')",
        "mis3":"url('./src/images/slideshow5.jpg')",
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

