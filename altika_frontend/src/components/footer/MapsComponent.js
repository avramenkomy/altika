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
        src="https://www.openstreetmap.org/export/embed.html?bbox=37.52030611038209%2C55.96042597546203%2C37.53219366073609%2C55.96785422810945&amp;layer=mapnik&amp;marker=55.96414028001831%2C37.52624988555908" style={{border: "1px solid #245F80"}}>
      </iframe>
      <br/>
      {/* <small><a href="https://www.openstreetmap.org/?mlat=55.96419&amp;mlon=37.52620#map=19/55.96419/37.52620&amp;layers=N">Посмотреть более крупную карту</a></small> */}
    </div>
  )
}

export default MapsComponent;
