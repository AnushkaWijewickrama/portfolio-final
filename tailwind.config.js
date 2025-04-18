/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        md: "2.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "10rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      primary: {
        600: "#5E3BEE",
        100: "#DFD8FC",
      },
      secondary: {
        600: "#58C2A2",
        100: "#F0FEFA",
      },
      neutral: {
        900: "#111827",
        800: "#1F2937",
        700: "#374151",
        600: "#4B5563",
        500: "#6B7280",
        400: "#9CA3AF",
        300: "#D1D5DB",
        200: "#E5E7EB",
        100: "#F3F4F6",
        50: "#F9FAFB",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      "display-2xl": [
        "72px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "90px",
        },
      ],
      "display-xl": [
        "60px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "72px",
        },
      ],
      "display-lg": [
        "48px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "60px",
        },
      ],
      "display-md": [
        "36px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "45px",
        },
      ],
      "display-sm": [
        "30px",
        {
          letterSpacing: "0em",
          lineHeight: "40px",
        },
      ],
      "display-xs": [
        "24px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      "body-xl": [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "28px",
        },
      ],
      "body-lg": [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "28px",
        },
      ],
      "body-md": [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "28px",
        },
      ],
      "body-sm": [
        "14px",
        {
          letterSpacing: "0em",
          lineHeight: "20px",
        },
      ],
      "body-xs": [
        "12px",
        {
          letterSpacing: "0em",
          lineHeight: "16px",
        },
      ],
    },
    boxShadow: {
      xs: "0px 2px 8px -3px rgba(28, 44, 64, 0.16)",
      sm: "0px 4px 12px -3px rgba(28, 44, 64, 0.1)",
      md: "0px 8px 16px -4px rgba(28, 44, 64, 0.08)",
      lg: "0px 10px 20px rgba(28, 44, 64, 0.08)",
      xl: "24px 24px 40px -12px rgba(28, 44, 64, 0.08)",
      "2xl": "8px 16px 48px rgba(28, 44, 64, 0.12)",
    },
    extend: {
      spacing: {
        18: "72px",
        22: "88px",
        30: "120px",
      },
      backgroundImage: {
        "hero-line":
          "linear-gradient(90deg, #9CA3AF 0%, rgba(156, 163, 175, 0) 45.82%, rgba(156, 163, 175, 0) 50%, rgba(156, 163, 175, 0) 54.38%, #9CA3AF 100%);",
        "logo-clouds-line":
          "linear-gradient(90deg, #9CA3AF 0%, rgba(156, 163, 175, 0) 39.47%, rgba(156, 163, 175, 0) 50%, rgba(156, 163, 175, 0) 60.51%, #9CA3AF 100%);",
      },
      letterSpacing: {
        2: "2px",
      },
    },
  },
  plugins: [],
};
