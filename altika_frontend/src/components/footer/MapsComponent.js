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
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=37.52460032701493%2C55.963670381636625%2C37.52779215574265%2C55.96471676097389&amp;layer=mapnik&amp;marker=55.96419357484192%2C37.526196241378784" style={{border: "1px solid black"}}>
      </iframe>
      <br/>
      <small><a href="https://www.openstreetmap.org/?mlat=55.96419&amp;mlon=37.52620#map=19/55.96419/37.52620&amp;layers=N">Посмотреть более крупную карту</a></small>
    </div>
  )
}

export default MapsComponent;
