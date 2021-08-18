import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(5),
    fontStyle: "italic",
  },
  footerTypography: {
    color: "white",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.footerContainer}>
      <Typography variant="body1" className={classes.footerTypography}>
        &copy;2021 Alla Chebotarska
      </Typography>
    </Box>
  );
}
