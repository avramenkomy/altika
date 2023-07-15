import React, { useState } from 'react';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';

import FeedbackModal from '../../../services/elements/FeedbackModal';

import './callUs.css';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  wrapperContacts: {
    verticalAlign: 'middle',
    textAlign: 'left',
  },
  contacts: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1)
  },
}));

export default function CallUs() {
  const classes = useStyles();
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);

  const handleCloseFeedbackModal = () => {
    setOpenFeedbackModal(false);
  }

  const handleOpenFeedbackModal = () => {
    setOpenFeedbackModal(true);
  }

  return (
    <div className={classes.root}>
      <FeedbackModal open={openFeedbackModal} onClose = {handleCloseFeedbackModal} />
      <Grid container alignItems="center">
        <Grid item>
          <Button onClick={handleOpenFeedbackModal} color="inherit" variant="outlined" style={{ marginRight: '5px'}}>Заказать звонок</Button>
        </Grid>
        <Grid item>
          <Box className={classes.wrapperContacts}>
            <CallIcon fontSize="small" className={classes.contacts}/>
            <Typography component="span" variant="body2">+7 (985) 126-69-66</Typography>
          </Box>
          <Box className={classes.wrapperContacts}>
            <EmailIcon fontSize="small" className={classes.contacts}/>
            <Typography component="span" variant="body2">ano-altika@mail.ru</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
