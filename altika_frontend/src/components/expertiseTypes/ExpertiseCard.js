import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 250,
    // margin: theme.spacing(2),
    height: '100%',
  },
  media: {
    height: 200,
  },
  card: {
    textAlign: 'center',
  },
}));

function ExpertiseCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={4}>
      <CardMedia
        className={classes.media}
        image={props.url}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: 'justify' }}>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ExpertiseCard;