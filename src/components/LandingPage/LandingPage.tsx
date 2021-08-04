import React from "react";
import About from "../About/About";
import Navigation from "../Navigation/Navigation";
import { Container, Box } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

const useStyles = makeStyles((theme: Theme) => ({
  landingContainer: {
    padding: theme.spacing(3),
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}
