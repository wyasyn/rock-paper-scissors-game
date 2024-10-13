/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      colors: {
        bg: "var(--bg-dark)",
        light: "var(--bg-light)",
        "score-num": "var(--text-dark)",
        score: "var(--score)",
        outline: "var(--outline)",
        "scissors-one": "var(--scissors-one)",
        "scissors-two": "var(--scissors-two)",
        "rock-one": "var(--rock-one)",
        "rock-two": "var(--rock-two)",
        "paper-one": "var(--paper-one)",
        "paper-two": "var(--paper-two)",
        "lizard-one": "var(--lizard-one)",
        "lizard-two": "var(--lizard-two)",
        "cyan-one": "var(--cyan-one)",
        "cyan-two": "var(--cyan-two)",
      },
    },
  },
  plugins: [],
};
