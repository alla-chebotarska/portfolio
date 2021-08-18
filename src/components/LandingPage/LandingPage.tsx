import { Box, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Portfolio from "../Portfolio/Portfolio";
import SectionHeader from "../SectionHeader/SectionHeader";

const useStyles = makeStyles((theme: Theme) => ({
  landingContainer: {
    padding: theme.spacing(5),
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <Banner />
      <Box id="navigation">
        <Navigation />
      </Box>
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
    </>
  );
}
