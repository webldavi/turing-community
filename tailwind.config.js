/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          default: "#009BF2",
          secoundary: "#00B2FE",
          dark: "#262A37",
          800: "#006794",
        },
        black: {
          50: "rgba(2, 2, 2, 0.56)",
        },
        white: {
          80: "rgba(255, 255, 255, 0.8)",
          100: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
