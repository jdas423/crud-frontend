/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'bg-img': "url('images/bg.jpg')",
        "slideshow1": "url('images/slideshow1.jpg')",
        "slideshow2":"url('images/slideshow2.jpg')",
        "slideshow3":"url('images/slideshow3.jpg')",
        "slideshow4":"url('images/slideshow4.jpg')",
        "slideshow5":"url('images/slideshow5.jpg')",
        "mis1":"url('images/slideshow5.jpg')",
        "mis2":"url('images/slideshow5.jpg')",
        "mis3":"url('images/slideshow5.jpg')",
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

