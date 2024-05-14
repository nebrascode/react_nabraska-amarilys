/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3b82f6",
          secondary: "#93c5fd",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    primary: "#3b82f6",
  },
  extend: {},

  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
