const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector", // add this line
  theme: {
    extend: {
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
