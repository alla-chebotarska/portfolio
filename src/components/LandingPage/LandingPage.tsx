import { Box, Container } from "@material-ui/core";
import { makeStyles, Theme,  MuiThemeProvider, createTheme  } from "@material-ui/core/styles";
import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Portfolio from "../Portfolio/Portfolio";
import SectionHeader from "../SectionHeader/SectionHeader";


const theme = createTheme ({
  palette: {
    primary: {
      main: "#333333",
    }
  },
  typography: {
    h6: {
      fontFamily: ["Cardo", "Times New Roman", 'sans-serif'].join(','),
      fontWeight: 600,
    },
    body1: {
      fontFamily: ["Cardo", "Times New Roman", 'sans-serif'].join(','),
      fontWeight: 400,
    },
    body2: {
      fontFamily: ["Cardo", "Times New Roman", 'sans-serif'].join(','),
      fontWeight: 400,
    },
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  landingContainer: {
    padding: theme.spacing(5),
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
          <SectionHeader text="About me" />
          <About />
        </Box>
        <Box id="portfolio">
          <SectionHeader text="Portfolio" />
          <Portfolio />
        </Box>
        <Box id="contact">
          <SectionHeader text="Contact" />
          <Contact />
        </Box>
      </Container>
      <Footer />
    </MuiThemeProvider>
  );
}
