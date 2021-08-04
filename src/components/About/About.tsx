import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core";
import about from "../../img/about.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  aboutContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.up("md")]: {
      direction: "row",
    },
  },
  aboutHeader: {
    marginBottom: theme.spacing(5),
    "&::after": {
      content: '" "',
      display: "block",
      width: 100,
      height: 1,
      margin: theme.spacing(2, 0),
      backgroundColor: "black",
    },
  },
  aboutImage: {
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      width: 270,
      height: 270,
    },
    [theme.breakpoints.up("md")]: {
      width: 370,
      height: 370,
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.aboutHeader}>
        About me
      </Typography>
      <Grid container className={classes.aboutContainer}>
        <Grid item xs={12} md={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pellentesque purus vel justo mattis iaculis. Cras aliquet sodales
          diam, vitae tincidunt leo posuere sed. Etiam imperdiet, massa nec
          venenatis lobortis, metus turpis tristique enim, eget sollicitudin
          enim lacus non ante. Aliquam a eros quis risus dignissim rhoncus.
          Suspendisse potenti. Maecenas ut risus imperdiet, hendrerit quam
          egestas, dictum eros. Vestibulum ultricies augue sapien, vitae
          imperdiet quam porttitor quis. Morbi faucibus vitae enim sit amet
          pharetra. Praesent vitae odio at eros condimentum fringilla ac id
          arcu. Vestibulum vitae nunc id dolor posuere faucibus gravida sit amet
          massa. Fusce dignissim, tellus vitae consectetur malesuada, ligula
          turpis mollis arcu, sed ornare metus est quis justo. Praesent
          sollicitudin nunc id placerat luctus. Aenean blandit leo vel nunc
          accumsan, eget porta arcu tincidunt. Suspendisse non enim et tellus
          ullamcorper congue sed a justo. Duis consequat mauris eu sollicitudin
          sagittis. Fusce fermentum dictum eros quis tincidunt. Pellentesque
          neque velit, pretium et efficitur a, accumsan at neque. Proin in
          ligula sollicitudin, dapibus purus ornare, mattis lorem. Praesent in
          faucibus magna. Mauris sit amet libero interdum, venenatis sem sit
          amet, placerat nunc. Etiam vitae sagittis diam. Donec scelerisque
          facilisis magna, eget consectetur sapien iaculis et. Nulla non mollis
          magna. Mauris non dui et nisl tempus porttitor.
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img src={about} alt="Logo" className={classes.aboutImage} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
