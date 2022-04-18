import React from 'react';
import { createRoot } from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { SnackbarUtilsConfigurator } from './services/elements/OutsideSnackbar';

import App from './App';
import './styles/style.css';
import theme from './services/theme';

const notistackRef = React.createRef();
const onClickDismiss = key => () => { 
  notistackRef.current.closeSnackbar(key);
}

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider
      ref={notistackRef}
      maxSnack={3}
      anchorOrigin={{ vertical: "bottom", horizontal: "right"}}
      autoHideDuration={8000}
      action={(key) => (
        <IconButton size="small" aria-label="close" color="inherit" onClick={onClickDismiss(key)}>
          <CloseIcon fontSize="small" />
        </IconButton>)
      }
    >
      <SnackbarUtilsConfigurator />
      <App />
    </SnackbarProvider>
  </ThemeProvider>
);
