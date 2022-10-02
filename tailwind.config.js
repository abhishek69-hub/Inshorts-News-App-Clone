/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: '560px',
      md: '768px',
      lg: '1036px',
      xl: '1470px',
    },
      
    
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
  ],
}
