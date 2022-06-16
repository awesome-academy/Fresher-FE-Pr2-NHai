import { createTheme } from '@mui/material';
import globalTheme from '../../../theme';

const loginPageTheme = createTheme(globalTheme, {
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small'
      },
      styleOverrides: {
        root: {
          width: '100%',
          borderRadius: '1.5rem',

          '&:hover': {
            outline: 'none',
            borderColor: 'none'
          }
        }
      }
    },
    MuiButtonBase: {
      variants: [
        {
          props: { variant: 'btnSubmit' },
          style: {
            background: globalTheme.palette.primary.main,
            color: globalTheme.otherColors.white,
            padding: '0.5rem 1rem'
          }
        }
      ]
    }
  }
});

export default loginPageTheme;
