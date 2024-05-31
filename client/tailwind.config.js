/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #764fe3 0%, #7592ee 100%)",
        community:
          "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)",
      },
      fontFamily:
      {
        Roboto:"'Roboto',sans-serif",
        Poppins:"'Poppins', sans-serif",
        text: ["Manrope", "sans-serif"],
        heading: ["Lexend", "sans-serif"],
      },
      colors: {
        'primary':"#9ca3af",
        'secondary':"#6b7280",
        'tertiary' :"#e5e5e5",
        'textDark':"#1f2937",
        'textWhite':"#f3f4f6"
        
      },
      animation: {
        'slide-down': 'slide-down 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.75s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.75s ease-out forwards',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
  ],
  
}