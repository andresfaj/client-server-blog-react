module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#6A5FDB",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
