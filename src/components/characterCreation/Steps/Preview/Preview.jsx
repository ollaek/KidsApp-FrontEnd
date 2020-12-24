import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Canvas from "../KidCharacter/canvas";
import SelectedContent from "./SelectedContent/SelectedContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    display: "grid",
    justifyContent: "center"
  },
}));

const Preview = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3}>{props.name}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={3}>
              Character
              <Canvas selectedCharachter={props.selectedCharachter}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} elevation={3}>
          <Paper className={classes.paper}>
              Cartoon Characters
              <SelectedContent selectedCartoons={props.selectedCartoons}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Preview;
