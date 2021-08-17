import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#333333",
      },
    },
    typography: {
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