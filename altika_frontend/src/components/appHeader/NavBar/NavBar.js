import React from 'react';
import { Toolbar, Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
  },
  link: {
    fontFamily: '"Roboto Condensed", sans-serif',
    textDecoration: 'none',
    color: '#e0e1e2',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const widthMore800 = useMediaQuery('(min-width:800px)');

  const rootStyle = clsx({
    [classes.root] : true,
    [classes.textAlignCenter] : widthMore800
  });

  return (
    <Toolbar disableGutters className={classes.root}>
      <Grid container className={rootStyle} alignContent="center" alignItems="center">
        <Grid item xs={12} md={3}>
          <AnchorLink className={classes.link} offset='100' href="#about">
            <Typography variant="h6">О нас</Typography>
          </AnchorLink>
        </Grid>
        <Grid item xs={12} md={3}>
          <AnchorLink className={classes.link} offset='100' href="#services">
            <Typography variant="h6">Услуги</Typography>
          </AnchorLink>
        </Grid>
        <Grid item xs={12} md={3}>
          <AnchorLink className={classes.link} offset='100' href="#expertise_types">
            <Typography variant="h6">Виды экспертиз</Typography>
          </AnchorLink>
        </Grid>
        <Grid item xs={12} md={3}>
          <AnchorLink className={classes.link} offset='100' href="#contacts">
            <Typography variant="h6">Контакты</Typography>
          </AnchorLink>
        </Grid>
      </Grid>
    </Toolbar>
  )
}