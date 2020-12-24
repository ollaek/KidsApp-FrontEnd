import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const styles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const characterSection = ({history}) => {
  const classes = styles();
  
  const goToCreate = () => {
    history.push("/create");
  }

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url('https://source.unsplash.com/random')` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src="https://source.unsplash.com/random"
          alt="img"
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6} style={{ margin: "7%" }}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Create
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              The Coolest
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Cartoon For Your Kids
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              onClick={() => goToCreate()}
              endIcon={<ArrowForwardIcon />}
            >
              Start
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default characterSection;
