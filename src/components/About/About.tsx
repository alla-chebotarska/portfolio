import React from "react";
import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
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
  aboutSkillsList: {
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
  createData("TypeScript, JavaScript, Java"),
  createData("React, Material-UI, Bootstrap, Firebase"),
  createData("HTML5, CSS3, Node.js"),
  createData("PostgreSQL, MySQL"),
  createData("Git"),
  createData("Jest/Enzyme"),
  createData("Figma"),
];

export default function About() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.aboutHeader}>
        About me
      </Typography>
      <Grid container className={classes.aboutContainer}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            I am a Junior Front end Developer with 2 years of experience, located
            in Vancouver, BC. My background is in Computer Science and I did my
            master's degree at Lodz University of Technology, Poland. Passionate
            about creating modern, easy to use and built with best practices
            websites.
          </Typography>
          <List>
            <ListSubheader className={classes.aboutSkillsList}>
              Skills:{" "}
            </ListSubheader>
            {skillsList.map((item, idx) => (
              <ListItem key={idx} className={classes.aboutSkillsList}>
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
