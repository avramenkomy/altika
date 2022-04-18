import React from 'react';
import { AppBar } from '@material-ui/core';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Logo from './Logo/Logo';
import CallUs from './CallUs/CallUs';
import NavBar from './NavBar/NavBar';

import './AppHeader.css'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(0deg, #256EA4 30%, #508BB6)',
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  nav: {
    flexGrow: 1,
  },
  callUs: {
    textAlign: 'center',
  },
  darkThemeButton: {
    textAlign: 'center',
  }
}));

function AppHeader() {
  const matches960 = useMediaQuery('(min-width:960px)');

  const classes = useStyles();
    return (
      <AppBar position={matches960 ? "sticky" : "static"} className={classes.root}>
        <Grid container alignContent="center" alignItems="center">
          { matches960 &&
            <Grid item>
              <Logo />
            </Grid>
          }

          <Grid item className={classes.nav}>
            <NavBar />
          </Grid>
          <Grid className={classes.callUs}>
            <CallUs />
          </Grid>
        </Grid>
      </AppBar>
    )
  }

export default AppHeader;