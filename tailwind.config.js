const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#130969",
        black: "rgb(9, 27, 71)",
        grey: "rgb(126, 114, 114)",
      },
      boxShadow: {
        custom: "0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2)",
      },
      textShadow: {
        custom: "2px 2px 0 rgba(0, 0, 0, 0.1)",
      },
      borderWidth: {
        custom: "2px",
      },
      borderColor: (theme) => ({
        custom: theme("colors.blue"),
      }),
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow-custom": {
            "text-shadow": "0.25rem 0.25rem 0 rgba(0, 0, 0, 0.15)",
          },
        },
        ["responsive", "hover"]
      );
    }),
  ],
};
