import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const styles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      // marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
  }));

const footer = () => {
    const classes = styles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Ahmed Ollaek
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Agmad Wa7ed Fel Magarra
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default footer;