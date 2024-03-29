import {
  Box, Grid, List,
  ListItem,
  ListItemText, makeStyles, Theme, Typography
} from "@material-ui/core";
import React from "react";
import about from "../../img/alla.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  aboutContainer: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.up("md")]: {
      direction: "row",
    },
  },
  aboutSkillsListItem: {
    padding: theme.spacing(0),
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

function createData(description: string) {
  return { description };
}

const skillsList = [
  createData("TypeScript, JavaScript, Java, GraphQL, SQL"),
  createData("React, NextJS, Strapi"),
  createData("Azure, Algolia, Firebase, Netlify"),
  createData("HTML5, CSS3, Node.js"),
  createData("Tailwind, Emotion,  Material-UI, Bootstrap"),
  createData("PostgreSQL, MongoDB"),
  createData("Git"),
  createData("Jest/Enzyme"),
  createData("Figma"),
];

export default function About() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.aboutContainer}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            My name is Alla Chebotarska and I'm a Front End Engineer
            with 2 years of experience, located in Vancouver, BC. My background
            is in Computer Science and I did my master's degree at Lodz
            University of Technology, Poland. I am very passionate and dedicated
            to my work, always open to learning new technologies and
            frameworks. I am an ambitious and exceptionally organized person,
            who is recognized for the ability to communicate effectively, work
            as part of a team and solve problems creatively.
          </Typography>
          <Box pt={2}>
            <Typography variant="h6">Tools and technologies:</Typography>
          </Box>
          <List>
            {skillsList.map((item, idx) => (
              <ListItem key={idx} className={classes.aboutSkillsListItem}>
                <ListItemText primary={item.description} />
              </ListItem>
            ))}
          </List>
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
