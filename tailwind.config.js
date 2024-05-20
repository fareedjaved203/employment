/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      notoSansArabic: ["var(--font-noto-sans-arabic)"],
      mulish: ["var(--font-mulish)"],
    },
    colors: {
      pinkBackground: {
        DEFAULT: "#D3175233",
      },
      pinkColor: {
        DEFAULT: "#D31752",
      },
      lightGray: {
        DEFAULT: "#A1A0BD",
      },
    },

    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  plugins: [],
};
