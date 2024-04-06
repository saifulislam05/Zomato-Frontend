/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg":
          "url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')",
      },
      colors: {
        "primary-bg": "#ffffff",
        "secondary-bg": "#f8f8f8",
        "heading-text": "#1c1c1c",
        
      },
      boxShadow: {
        "collection-shadow": "0 3px 12px rgba(0, 0, 0, 0.08)",
        
      },
    },
  },
  plugins: [],
};
