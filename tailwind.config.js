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
        "red": "#EA3223",
        "pink": "#E93A7D",
        "blue": "#1DA1F2",
      },
      fontFamily: {
        "sans": "DM Sans"
      },
      backgroundImage: {
        hero13: 'url("../img/hero-13_01.png")',
        hero16: 'url("../img/hero-16_01.png")',
        hero18: 'url("../img/hero-18_01.png")',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
