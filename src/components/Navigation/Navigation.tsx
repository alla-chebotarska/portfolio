import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Link as Scrolling } from "react-scroll";

const useStyles = makeStyles((theme: Theme) => ({
  NavigationToolbar: {
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "white",
  },
  NavigationToolbarTitle: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
  },
  navigationList: {
    display: "flex",
    flexDirection: "row",
  },
  navigationListItem: {
    cursor: "pointer",
  },
  NavigationLinkBox: {
    paddingRight: theme.spacing(3),
  },
  NavigationListItemText: {},
}));

function createData(title: string, href: string) {
  return { title, href };
}

const navigationList = [
  createData("About", "about"),
  createData("Portfolio", "portfolio"),
  createData("Contact", "contact"),
];

export default function Navigation() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar className={classes.NavigationToolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.NavigationToolbarTitle}
          >
            Alla Chebotarska
          </Typography>
          <Box
            display={{ xs: "none", sm: "block" }}
            className={classes.NavigationLinkBox}
          >
            <List className={classes.navigationList}>
              {navigationList.map((item) => (
                <ListItem
                  key={item.title}
                  className={classes.navigationListItem}
                >
                  <Scrolling
                    color="textPrimary"
                    to={item.href}
                    spy={true}
                    smooth={true}
                  >
                    <ListItemText
                      primary={item.title}
                      className={classes.NavigationListItemText}
                    />
                  </Scrolling>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
}
