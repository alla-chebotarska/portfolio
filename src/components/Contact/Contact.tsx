import { Box, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  contactIcon: {
    margin: theme.spacing(1),
  },
}));

function createData(icon: React.ReactNode, href: string) {
  return { icon, href };
}

const contactList = [
  createData(
    <GitHubIcon fontSize="large" />,
    "https://github.com/alla-chebotarska"
  ),
  createData(
    <LinkedInIcon fontSize="large" />,
    "https://www.linkedin.com/in/alla-chebotarska/"
  ),
  createData(
    <EmailIcon fontSize="large" />,
    "mailto:alla.chebotarska@gmail.com"
  ),
];

export default function Contact() {
  const classes = useStyles();

  return (
    <>
      <Typography>
        I’am always open to discuss product development work or partnership
        opportunities.
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            {contactList.map((item, idx) => (
              <Button
                key={idx}
                className={classes.contactIcon}
                onClick={() => window.open(item.href, "_blank")}
              >
                {item.icon}
              </Button>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
