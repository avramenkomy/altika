import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#508BB6',
        main: '#256EA4',
        dark: '#006EAA',
        contrastText: '#F0F0F1'
      },
      secondary: {
        light: '#FFF',
        main: '#E0E1E2',
        dark: '#F0F0F1',
        contrastText: '#000'
      },
    },
    typography: {
      h2: {
        '@media (max-width: 501px)': {
          fontSize: '40px',
        },
        '@media (max-width: 401px)': {
          fontSize: '30px',
        },
        '@media (max-width: 301px)': {
          fontSize: '20px',
        },
      },
      h6: {
        fontSize: '1rem',
        '@media (min-width: 1280px)': {
          fontSize: '1.25rem',
        },
        '@media (min-width: 1920px)': {
          fontSize: '1.5rem',
        }
      }
    }
  });

export default theme;