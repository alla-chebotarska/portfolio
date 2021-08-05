import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import okhelp from "../../img/okhelp.png";
import waterly from "../../img/waterly.png";

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
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
  },
  portfolioCardContainer: {
    width: 450,
  },
  portfolioCardMedia: {
    height: 220,
  },
  portfolioExampleButtonContainer: {
    paddingBottom: theme.spacing(2),
  },
}));

export type LandingListInfo = {
  img: any;
  title: string;
  description: string;
  link: string;
};

const Portfolio = () => {
  const classes = useStyles();
  const portfolioList: LandingListInfo[] = [
    {
      img: waterly,
      title: "Waterly - helps to take care of your plants",
      description:
        "Created all application from scratch using JavaScript, React, Material-UI and Firebase",
      link: "https://plant-care.web.app/",
    },
    {
      img: okhelp,
      title: "OKHelp",
      description:
        "Implemented a new design for the landing page which extended functionality and user friendly process using React, Typescript and Material-UI",
      link: "https://www.okhelp.org/",
    },
  ];

  const renderList = (list: LandingListInfo[]) =>
    list.map((item, idx) => (
      <Grid item key={idx} xs={12} md={6}>
        <Box display="flex" justifyContent="center">
          <Card
            className={classes.portfolioCardContainer}
          >
            <CardActionArea onClick={() => window.open(item.link, "_blank")}>
              <CardMedia
                className={classes.portfolioCardMedia}
                image={item.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
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
