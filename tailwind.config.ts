// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Adjust paths as necessary
  theme: {
    extend: {
      colors: {
        // Define custom colors if needed
        foreground: "rgb(var(--foreground-rgb))",
        backgroundStart: "rgb(var(--background-start-rgb))",
        backgroundEnd: "rgb(var(--background-end-rgb))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#570df8", // Primary color
          "primary-focus": "#4506cb", // Primary focus
          "primary-content": "#ffffff", // Foreground for primary
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff", // Base color for the main area
          "base-200": "#f9fafb", // Secondary base color
          "base-300": "#d1d5db", // Tertiary base color
          "base-content": "#1f2937", // Text color on base
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      // You can add more themes here if needed
    ],
  },
};
