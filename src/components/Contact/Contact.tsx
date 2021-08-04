import { Box, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  contactHeader: {
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
  contactIcon: {
    margin: theme.spacing(1),
  },
}));

function createData(icon: React.ReactNode, href: string) {
  return { icon, href };
}

const contactList = [
  createData(<GitHubIcon fontSize="large"/>, "https://github.com/alla-chebotarska"),
  createData(<LinkedInIcon fontSize="large"/>, "https://github.com/alla-chebotarska"),
];

export default function Contact() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" className={classes.contactHeader}>
        Contact
      </Typography>
      <Typography>
        This section will contain links to social networks and a map
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            {contactList.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                color="inherit"
                className={classes.contactIcon}
              >
                {item.icon}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
