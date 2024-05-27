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
      animation: {
        'slide-down': 'slide-down 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
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
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake","business"],
    darkTheme: "light", // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
   
  },
}