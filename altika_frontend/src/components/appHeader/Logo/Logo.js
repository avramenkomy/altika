import React from 'react';
import { makeStyles} from '@material-ui/core/styles';

import './logo.css'
import LogoImage from '../../../resources/img/logos/logo_white.svg';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(5),
  },
  img: {
    objectFit: 'cover',
    width: '50px',
    height: 'auto',
    maxWidth: '140px',
  }
}));

export default function Logo() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <img src={LogoImage} alt="logo" className={classes.img}/>
    </div>
  )
}