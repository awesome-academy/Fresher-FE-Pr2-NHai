import { Box, Typography } from '@mui/material';
import { logo } from '../../../utils/constants';
import theme from '../LoginPage/LoginPage.styles';

function LoginLogo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        rowGap: '1rem'
      }}
    >
      <Box component='img' src={logo.second.url} alt={logo.second.alt} />
      <Typography fontSize='0.8rem' color={theme.otherColors.white}>
        Đăng nhập với tài khoản của bạn
      </Typography>
    </Box>
  );
}
export default LoginLogo;
