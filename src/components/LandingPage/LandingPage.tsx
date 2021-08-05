import { Box, Container } from "@material-ui/core";
import { makeStyles, Theme,  MuiThemeProvider, createTheme  } from "@material-ui/core/styles";
import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Portfolio from "../Portfolio/Portfolio";


const theme = createTheme ({
  typography: {
    h6: {
      fontFamily: ["Cardo", "Times New Roman", 'sans-serif'].join(','),
    },
    body1: {
      fontFamily: ["Cardo", "Times New Roman", 'sans-serif'].join(','),
    },
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  landingContainer: {
    padding: theme.spacing(3),
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Navigation />
      <Container
        maxWidth={false}
        disableGutters
        className={classes.landingContainer}
      >
        <Box id="about">
          <About />
        </Box>
        <Box id="portfolio">
          <Portfolio />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
      </Container>
      <Footer />
    </MuiThemeProvider>
  );
}
