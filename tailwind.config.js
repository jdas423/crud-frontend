/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "green-variant":"#6EEB83",
        "black-variant":"#F5F5F5",
      },
       screens:{
           "extrasm": "500px",
      },
      height:{
           "customH":"650px"
      }    
    },
  },
  plugins: [],
}

