/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        dynamic: "clamp(1rem, 10vw, 4rem)",
        heading: "clamp(4rem, 20vw, 10rem)",
      },
    },
 
  },
  plugins: [],
}
