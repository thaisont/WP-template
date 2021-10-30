module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
      },
      textColor: {
        primary: "#AC1D03",
        secondary: "#333333",
      },
      backgroundColor: {
        primary: "#AC1D03",
        secondary: "#333333",
      },
      maxWidth: {
        maxBase: "200px",
      },
      minHeight: {
        0: "0",

        half: "50%",

        full: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
