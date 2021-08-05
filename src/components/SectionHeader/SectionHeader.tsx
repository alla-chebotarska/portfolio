import { Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    sectionHeader: {
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
}));

interface ITitle {
    text: string;
}

export default function SectionHeader(props: ITitle) {
  const classes = useStyles();
  return (
    <Typography variant="h3" className={classes.sectionHeader}>
      {props.text}
    </Typography>
  );
}
