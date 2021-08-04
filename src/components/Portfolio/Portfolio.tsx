import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import waterly from "../../img/waterly.jpg";
import okhelp from "../../img/okhelp.jpg";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  portfolioContainer: {
    padding: theme.spacing(2),
  },
  portfolioHeader: {
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
  portfolioExample: {
    [theme.breakpoints.down("sm")]: {
        width: "100%"
      },
      [theme.breakpoints.up("md")]: {
        width: "50%"
      },
  },
}));

export type LandingListInfo = {
  img: any;
  description: string;
};

const Portfolio = () => {
  const classes = useStyles();
  const portfolioList: LandingListInfo[] = [
    {
      img: waterly,
      description: "Helps you to take care of your plants",
    },
    {
      img: okhelp,
      description: "Plan your family for emergensies",
    },
  ];

  const renderList = (list: LandingListInfo[]) =>
    list.map((item, idx) => (
      <Grid item key={idx} xs={12} md={6}>
        <Box display="flex" justifyContent="center">
          <img
            src={item.img}
            alt="portfolio example"
            className={classes.portfolioExample}
          />
        </Box>
        <Typography variant="subtitle1" align="center">
          {item.description}
        </Typography>
      </Grid>
    ));
  return (
    <Box className={classes.portfolioContainer}>
      <Typography variant="h3" className={classes.portfolioHeader}>
        Portfolio
      </Typography>
      <Grid container spacing={5}>
        {renderList(portfolioList)}
      </Grid>
    </Box>
  );
};

export default Portfolio;
