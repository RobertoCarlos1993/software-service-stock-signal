import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import EuroIcon from "@material-ui/icons/Euro";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mr1: {
    marginRight: ".2em",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Alex Investment
          </Typography>
          <EuroIcon className={classes.mr1} />
          <ShowChartIcon className={classes.mr1} />
          <MonetizationOnIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
}
