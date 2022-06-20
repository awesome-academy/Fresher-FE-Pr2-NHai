import { Box, ThemeProvider } from '@mui/material';
import { Button } from '../../../components/Button/Button';
import Form from '../LoginForm/LoginForm';
import Logo from '../LoginLogo/LoginLogo';
import theme from './LoginPage.styles';

function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: `-webkit-linear-gradient(left, ${theme.palette.primary.main}, ${theme.otherColors.orangeLight})`,
          display: 'flex',
          padding: '1rem',
          justifyContent: 'space-between',
          pl: '2rem'
        }}
      >
        <Logo />
        <Form />
      </Box>
    </ThemeProvider>
  );
}

export default LoginPage;
