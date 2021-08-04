import React from 'react';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    footerContainer: {
        backgroundColor: "black",
        padding: theme.spacing(5),
        fontStyle: "italic",
    },
    footerTypography: {
        color: "white",
        fontFamily: ["Cardo", "Times New Roman", 'sans-serif'].join(','),
    }
  }));

export default function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.footerContainer}>
            <Typography variant="subtitle1" className={classes.footerTypography}>&copy;2021 Alla Chebotarska</Typography>
        </Box>
    )
}
