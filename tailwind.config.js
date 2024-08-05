/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    'node_modules/preline/dist/*.js',
     "./node_modules/flowbite/**/*.js"
  ],
  prefix: "",
  plugins: [ require('preline/plugin') , require("tailwindcss-animate") ,  require('tailwindcss-rtl')],
}