import React from 'react';
import propTypes from 'prop-types';
import { Card, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import EvaluationModal from './EvaluationModal';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 250,
    margin: theme.spacing(2),
    cursor: 'pointer',
    position: 'relative',
  },
  media: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    position: 'absolute',
    bottom: '5px',
    right: '10px',
    color: 'white',
    textDecoration: 'underline',
  },
  card: {
    textAlign: 'center',
  },
  dark_shadow: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, .6)',
    borderRadius: '10px'
},
title: {
  zIndex: '1',
}
}));

function EvaluationCard({ evaluation }) {
  const classes = useStyles();

  const [modal, setModal] = React.useState(false);

  const handleOpenModal = () => { setModal(true) };
  const handleCloseModal = () => { setModal(false) };

  return (
    <React.Fragment>
      <EvaluationModal open={modal} onClose={handleCloseModal} evaluation={evaluation} />
      <Card className={classes.root} onClick={handleOpenModal}>
        <div className={classes.dark_shadow} />
        <CardMedia
          className={classes.media}
          image={evaluation.url}
          title={evaluation.title}
          component="div"
        >
          <Typography variant="h6" color="secondary" className={classes.title}>{evaluation.title}</Typography>
          <Typography variant="caption" className={classes.details}>Подробнее...</Typography>
        </CardMedia>
      </Card>
    </React.Fragment>
  )
}

EvaluationCard.propTypes = {
  evaluation: propTypes.object,
}

export default EvaluationCard;
