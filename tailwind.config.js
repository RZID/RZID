module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-red)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
      },
    },
  },
  plugins: [],
};
