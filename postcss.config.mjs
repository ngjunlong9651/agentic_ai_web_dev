const config = {
  plugins: {
    "@tailwindcss/postcss": {
      content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    },
  },
};

export default config;
