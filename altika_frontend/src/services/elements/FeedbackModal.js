import React, { useState, useEffect } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, TextField,
  DialogActions, IconButton, Typography, Grid, Button, InputAdornment
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles, alpha } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import OutsideSnackbar from '../elements/OutsideSnackbar';

import Backdrop from './Backdrop';
import validation from '../tackles/validation';
import useComponentDidMount from '../elements/CustomHooks';
import CustomLoader from '../elements/CustomLoader';
import { Emails } from '../api';

const useStyles = makeStyles((theme) => ({
  titleRoot: {
    margin: 0,
    padding: theme.spacing(2),
    background: 'linear-gradient(0deg, #256EA4 40%, #508BB6 70%);',
    color: theme.palette.secondary.contrastText,
  },
  contentRoot: {
    padding: theme.spacing(1),
  },
  actionsRoot: {
    margin: 0,
    padding: theme.spacing(1),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  itemAction: {
    textAlign: 'center'
  },
  items: {
    margin: theme.spacing(1),
  },
  textField: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&:focused': {
      backgroundColor: '#fff',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  btnName: {
    flexGrow: '1'
  }
}));

const Title = ((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <DialogTitle disableTypography className={classes.titleRoot} {...other}>
      <Typography variant="h6" color="secondary">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

function FeedbackModal(props) {
  const classes = useStyles();
  let isMounted = useComponentDidMount();

  const [disableSubmit, setDisableSubmit] = useState(true);
  const [loader, setLoader] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [backdropName, setBackdropName] = useState(false);
  const [backdropEmail, setBackdropEmail] = useState(false);
  const [backdropPhone, setBackdropPhone] = useState(false);

  useEffect(() => {
    if (isMounted) {
      const timeOutId = setTimeout(() => {
        setBackdropName(false)
        if (!validation('string', name).state) {
          setNameError(true)
        } else {
          setNameError(false)
        }
      }, 500);
      return () => clearTimeout(timeOutId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    if (isMounted) {
      const timeOutId = setTimeout(() => {
        setBackdropEmail(false)
        if (!validation('email', email).state) {
          setEmailError(true)
        } else {
          setEmailError(false)
        }
      }, 500);
      return () => clearTimeout(timeOutId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  useEffect(() => {
    if (isMounted) {
      const timeOutId = setTimeout(() => {
        setBackdropPhone(false)
        if (!validation('phone', phone).state) {
          setPhoneError(true)
        } else {
          setPhoneError(false)
        }
      }, 500);
      return () => clearTimeout(timeOutId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone]);

  useEffect(() => {
    if (isMounted) {
      (name !== '' && phone !== '' && email !== '' && !nameError && !phoneError && !emailError)
        ? setDisableSubmit(false)
        : setDisableSubmit(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, phone, nameError, emailError, phoneError]);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setBackdropName(true);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setBackdropEmail(true);
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setBackdropPhone(true);
  }

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  }

  const clearState = () => {
    setName('');
    setEmail('');
    setPhone('');
    setNameError(false);
    setEmailError(false);
    setPhoneError(false);
    setBackdropEmail(false);
    setBackdropName(false);
    setBackdropPhone(false);
    setDisableSubmit(false);
    setLoader(false);
  }

  const handleClick = async () => {
    setLoader(true);
    setDisableSubmit(true);
    if (!nameError && !phoneError && !emailError) {
      const params = {
        name,
        phone,
        email,
      }
      if (props.withDetails) {
        params.subject = props.subject ? `Заявка от клиента ${props.subject}` : 'Заявка от клиента';
        params.details = details;
      } else {
        params.subject = 'Перезвонить клиенту'
      }
      let result = await Emails.send(params);
      if (result) {
        console.log('Сообщение доставлено');
        clearState();
        props.onClose();
        OutsideSnackbar.success('Заявка успешно отправлена')
      } else {
        setLoader(false);
        setDisableSubmit(false);
      }
    }
  }

  return(
    <Dialog open={props.open} onClose={props.onClose} className={classes.root} maxWidth={'xs'}>
      <Title classes={classes} onClose={props.onClose}>
        Заказать&nbsp;звонок
      </Title>
      <DialogContent className={classes.contentRoot} dividers>
        <Grid container direction="column">
          <Grid item xs={12} className={classes.items}>
            <TextField
              label="Введите имя"
              variant="filled"
              size="small"
              className={classes.textField}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    {backdropName && <Backdrop size={20} color="gray" />}
                    {!backdropName && nameError && <ErrorIcon style={{ color: red[500], fontSize: 25 }} />}
                    {!backdropName && !nameError && name !== '' && <CheckIcon style={{ color: green[700], fontSize: 25 }} />}
                  </InputAdornment>
                )
              }}
              value={name}
              onChange={handleNameChange}
              error={nameError}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className={classes.items}>
            <TextField
              label="Введите email"
              variant="filled"
              size="small"
              className={classes.textField}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    {backdropEmail && <Backdrop size={20} color="gray" />}
                    {!backdropEmail && emailError && <ErrorIcon style={{ color: red[500], fontSize: 25 }} />}
                    {!backdropEmail && !emailError && email !== '' && <CheckIcon style={{ color: green[700], fontSize: 25 }} />}
                  </InputAdornment>
                )
              }}
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className={classes.items}>
            <TextField
              label="Введите номер телефона"
              variant="filled"
              size="small"
              className={classes.textField}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    {backdropPhone && <Backdrop size={20} color="gray" />}
                    {!backdropPhone && phoneError && <ErrorIcon style={{ color: red[500], fontSize: 25 }} />}
                    {!backdropPhone && !phoneError && phone !== '' && <CheckIcon style={{ color: green[700], fontSize: 25 }} />}
                  </InputAdornment>
                )
              }}
              value={phone}
              onChange={handlePhoneChange}
              error={phoneError}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className={classes.items}>
            {props.withDetails && <TextField
              label="Кратко опишите суть вопроса"
              variant="filled"
              size="small"
              className={classes.textField}
              value={details}
              onChange={handleDetailsChange}
              multiline
              minRows={5}
              InputProps={{
                disableUnderline: true,
              }}
              fullWidth
            />}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container direction="column" className={classes.itemAction}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleClick}
              disabled={disableSubmit}
              endIcon={loader && <CustomLoader />}
            >
              <span className={classes.btnName}>Отправить</span>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" component="p">
              Нажимая кнопку отправить, Вы даете согласие на обработку персональных данных и бла-бла-бла...
            </Typography>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  )
}

export default FeedbackModal;
