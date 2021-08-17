import { Box } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Image from "../../img/banner_color.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: `linear-gradient( rgba(1, 1, 1, 0.1), rgba(1, 1, 1, 0.1) ), url(${Image})`,
  },
  bannerCaption: {
    position: "absolute",
    left: 0,
    top: "30%",
    width: "100%",
    textAlign: "center",
    color: "black",
  },
  bannerTextItalic: {
    color: "white",
    padding: theme.spacing(2),
    fontSize: "1.35rem",
    fontStyle: "italic",
    fontFamily: ["Cardo", "Times New Roman", "sans-serif"].join(","),
  },
  bannerText: {
    color: "white",
    padding: theme.spacing(2),
    fontSize: "2.8rem",
    fontWeight: 700,
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    textTransform: "uppercase",
  },
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.banner}>
      <Box className={classes.bannerCaption}>
        <span className={classes.bannerTextItalic}>
          Oh, hello, nice to meet you!
        </span>
        <br />
        <br />
        <br />
        <span className={classes.bannerText}>I am a Front End Developer</span>
        <br />
        <br />
        <br />
        <span className={classes.bannerTextItalic}>
          I code beautifully simple things, and I love what I do
        </span>
      </Box>
    </Box>
  );
}
