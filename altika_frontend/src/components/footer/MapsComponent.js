import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}));

function MapsComponent({width, height}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <iframe
        title="openstreetmap"
        width={width}
        height={height}
        src="https://www.openstreetmap.org/export/embed.html?bbox=37.51946926116944%2C55.96045600360553%2C37.53292322158814%2C55.96788425048958&amp;layer=mapnik&amp;marker=55.96417330780496%2C37.526196241378784"
        style={{ border: '1px solid #245F80'}}
      />
      <br/>
      <small><a href="https://www.openstreetmap.org/?mlat=55.96417&amp;mlon=37.52620#map=17/55.96417/37.52620&amp;layers=N">Посмотреть более крупную карту</a></small>
    </div>
  )
}

export default MapsComponent;
