import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#1b5e20",
        dark: "#003300",
        light: "#4c8c4a",
      },
    },
    typography: {
      h3: {
        color: "#003300",
      },
      h6: {
        fontFamily: ["Cardo", "Times New Roman", "sans-serif"].join(","),
        fontWeight: 600,
      },
      body1: {
        fontFamily: ["Cardo", "Times New Roman", "sans-serif"].join(","),
        fontWeight: 400,
      },
      body2: {
        fontFamily: ["Cardo", "Times New Roman", "sans-serif"].join(","),
        fontWeight: 400,
      },
    },
  });