module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "dark-violet": "#1E0E62",
        "dark-violet-2": "#151439",
        "light-violet": "#482BE7",
        "green": "#25DAC5",
        "primary": "#2F1893",
      },
      fontFamily: {
        "sans": "DM Sans"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
