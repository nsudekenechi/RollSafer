/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {


    extend: {
      borderRadius: {
        'weird': '37% 63% 75% 25% / 73% 52% 48% 27% '
      },
      boxShadow: {
        "card": "0px 0px 30px"
      }
    },
  },
  plugins: [],
}

