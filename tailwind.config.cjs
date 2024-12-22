const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      margin: {
        '2rem': '2rem',
      },
      fontFamily: {
        sans: ["Lora", ...defaultTheme.fontFamily.serif],  // Change "Merriweather" to "Lora"
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        'text-yellowish': "var(--color-text)",
        'custom-indigo': '#ff901e',
        'custom-fuchsia': '#d92929',
        'custom-pink': '#ff2a68',
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    require("tailwindcss-fluid-type"),
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography')({
      theme: {
        extend: {
          typography: (theme) => ({
            DEFAULT: {
              css: {
                color: theme("colors.textColor.default"),
                lineHeight: "1.5", // Increase line height for readability
                h1: {
                  fontSize: "2em",
                  textAlign: "center",
                  marginBottom: "0.5em",
                },
                h2: {
                  fontSize: "1.75em",
                  textAlign: "center",
                  marginBottom: "0.5em",
                },
                h3: {
                  fontSize: "1.75em",
                  textAlign: "center",
                  marginBottom: "0.5em",
                },
                p: {
                  fontSize: "1.2em",
                  marginBottom: "1em",
                },
              },
            },
          }),
        },
      },
    }),
  ],
};
