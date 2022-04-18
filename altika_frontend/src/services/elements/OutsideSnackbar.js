import { useSnackbar, WithSnackbarProps } from 'notistack';
import React from 'react';

let useSnackbarRef: WithSnackbarProps;
export const SnackbarUtilsConfigurator = () => {
  useSnackbarRef = useSnackbar();
  return null
}

const export_methods = {
  success(msg, options={}) {
    this.toast(msg, { ...options, variant: 'success' })
  },
  warning(msg, options={}) {
    this.toast(msg, { ...options, variant: 'warning' })
  },
  info(msg, options={}) {
    this.toast(msg, { ...options, variant: 'info' })
  },
  error(msg, options={}) {
    this.toast(msg, { ...options, variant: 'error' })
  },
  toast(msg, options={}) {
    useSnackbarRef.enqueueSnackbar(msg, options)
  }
};

export default export_methods;