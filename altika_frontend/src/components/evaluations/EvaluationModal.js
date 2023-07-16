import React from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import MuiListItemText from '@material-ui/core/ListItemText';
import MuiListItem from '@material-ui/core/ListItem';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    background: 'linear-gradient(0deg, #256EA4 40%, #508BB6 70%);',
    color: theme.palette.secondary.contrastText,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const ListItemText = withStyles(theme => ({
  root: {
    margin: 0,
    paddingRight: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5),
  }
}))(MuiListItemText);

const ListItem = withStyles(theme => ({
  root: {
    padding: theme.spacing(0.5),
  }
}))(MuiListItem);

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" color="secondary">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function EvaluationModal({ evaluation, open, onClose }) {

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {evaluation.title}
      </DialogTitle>
      <DialogContent>
        {Array.isArray(evaluation.description)
          ? <List>
              {evaluation.description.map((item, index) => <ListItem key={index}><ListItemText primary={item}/></ListItem>)}
            </List>
          : <Typography gutterBottom component="div">
              {evaluation.description}
            </Typography>
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="outlined">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
}

EvaluationModal.propTypes = {
  evaluation: propTypes.object,
  open: propTypes.bool,
  onClose: propTypes.func,
}

export default EvaluationModal;
