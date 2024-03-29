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
import okhelp from "../../img/okhelp_color.png";
import waterly from "../../img/waterly_color.png";
import waterly_landing from "../../img/waterly_landing_color.png";
import covidTimeline from '../../img/covid_timeline.png';
import learnDiabetes from '../../img/learn_diabetes.png';
import compass from '../../img/compass.png';

const useStyles = makeStyles((theme: Theme) => ({
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
      img: covidTimeline,
      title: "My pandemic Stories",
      description:
        "Platform serves as a digital communication and knowledge translation tool to visually present the progression of major milestones of the COVID-19 pandemic",
      link: "https://www.mypandemicstories.ca/",
    },
    {
      img: learnDiabetes,
      title: "Learn Diabetes",
      description:
        "ELearning platform that address the educational journey of the patient and their family from diagnosis through to day-to-day management",
      link: "https://learn-diabetes-dev.bcchdigital.ca/",
    },
    {
      img: compass,
      title: "Compass Mental Health",
      description:
        "Complete redesign and adding new functionality for current website (https://compassbc.ca/) to provide valuable resources for its intended audiences",
      link: "https://compass.bcchdigital.ca/",
    },
    {
      img: waterly,
      title: "Waterly",
      description:
        "Proprietary web application that helps users to take care of their plants. Was created from scratch using HTML/CSS, JavaScript, React, Material-UI and Firebase",
      link: "https://plant-care.web.app/",
    },
    {
      img: waterly_landing,
      title: "Waterly-Landing",
      description:
        "Landing page for andriod application. Was created from scratch using HTML/CSS, TypeScript, React, Material-UI and Firebase",
      link: "https://waterly.web.app/",
    },
    {
      img: okhelp,
      title: "OKHelp",
      description:
        "I've implemented a new design for the landing page which extended functionality and user-friendly process, using React, TypeScript, and Material-UI",
      link: "https://www.okhelp.org/",
    },

  ];

  const renderList = (list: LandingListInfo[]) =>
    list.map((item, idx) => (
      <Grid item key={idx} xs={12} md={4}>
        <Box display="flex" justifyContent="center" pb={2} m={2}>
          <Card className={classes.portfolioCardContainer}>
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
    <Box>
      <Grid container spacing={1}>
        {renderList(portfolioList)}
      </Grid>
    </Box>
  );
};

export default Portfolio;
