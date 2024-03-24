/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        Roboto:"'Roboto',sans-serif",
        Poppins:"'Poppins', sans-serif",
      },
      colors: {
        'primary':"#9ca3af",
        'secondary':"#6b7280",
        'tertiary' :"#e5e5e5",
        'textDark':"#1f2937",
        'textWhite':"#f3f4f6"
        
      },
    },
  },
  plugins: [],
}