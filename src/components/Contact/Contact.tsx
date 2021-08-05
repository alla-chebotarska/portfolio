import { Box, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
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
    "https://github.com/alla-chebotarska"
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
        I’m always open to discussing product design work or partnership
        opportunities.
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
