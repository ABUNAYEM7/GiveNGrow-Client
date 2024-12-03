/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E07A5F',
        Secondary: '#A7C4BC',
        bgColor: '#F1E8D4',
        textColor: '#E07A5F',
        btnColor: '#D04C3D',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
