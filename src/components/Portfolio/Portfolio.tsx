import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import waterly from "../../img/waterly.png";
import okhelp from "../../img/okhelp.png";
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
        width: "80%"
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
      description: "Waterly - helps you to take care of your plants",
    },
    {
      img: okhelp,
      description: "okHelp - helps your family plan for emergensies",
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
        <Typography variant="body1" align="center">
          {item.description}
        </Typography>
      </Grid>
    ));
  return (
    <Box className={classes.portfolioContainer}>
      <Typography variant="h3" className={classes.portfolioHeader}>
        Portfolio
      </Typography>
      <Grid container spacing={1}>
        {renderList(portfolioList)}
      </Grid>
    </Box>
  );
};

export default Portfolio;
