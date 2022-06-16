import { createTheme } from '@mui/material';
import globalTheme from '../../theme';

const buttonTheme = createTheme({
  components: {
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

export default buttonTheme;
