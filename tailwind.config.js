/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require("@tailwindcss/typography"),
      require("daisyui")
  ],
}

