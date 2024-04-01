/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg":
          "url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')",
      },
    },
  },
  plugins: [],
};
