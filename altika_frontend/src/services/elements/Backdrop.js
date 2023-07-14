import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green, red, yellow, orange, blue, grey } from '@material-ui/core/colors';

function Backdrop(props) {
  const size = props.size;
  let color;

  switch (props.color) {
    case 'success':
      color = green[700];
      break;
    case 'warning':
      color = yellow[700];
      break;
    case 'error':
      color = red[700];
      break;
    case 'orange':
      color = orange[700];
      break;
    case 'blue':
     color = blue[700];
      break;
    case 'black':
      color = grey[900];
        break;
    default: color = grey[700]
  }
  return (
    <CircularProgress size={size} style={{ color }}/>
  )
}

export default Backdrop;
