import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Box, TextField, Link, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Login } from '../../../store/authentication/authentication.thunk';
import theme from '../LoginPage/LoginPage.styles';

function LoginForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authen);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Nhập tên người dùng').email('Nhập email'),
      password: Yup.string().required('Nhập mất khẩu')
    }),
    onSubmit(values) {
      dispatch(Login(values));
    }
  });

  return (
    <Box
      sx={{
        bgcolor: `${theme.otherColors.white}`,
        clipPath: `polygon(17% 0, 100% 0%, 100% 100%, 20% 100%, 0% 50%)`,
        p: '2rem 5rem',
        width: '70%'
      }}
    >
      <Box component='form' minWidth='25rem' onSubmit={formik.handleSubmit}>
        <Box component='legend' textAlign='center' fontSize='2rem' color={theme.otherColors.gray}>
          Đăng nhập
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',
            m: '1rem 0 1rem 0'
          }}
        >
          <TextField
            type='text'
            name='email'
            label='Email'
            variant='outlined'
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            type='password'
            name='password'
            label='Mật khẩu(*)'
            variant='outlined'
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Box>
        <Box>
          <Link
            component={RouterLink}
            to='/register'
            sx={{
              fontSize: '0.8rem',
              color: theme.otherColors.purple,
              fontWeight: 400,
              textDecoration: 'underline'
            }}
          >
            Đăng ký / Quên mật khẩu?
          </Link>
        </Box>

        <Button
          type='submit'
          sx={{
            color: theme.otherColors.white,
            background: theme.palette.primary.main,
            borderRadius: '1rem',
            mt: '2rem',
            p: '0.5rem 2rem',
            float: 'right'
          }}
        >
          Đăng nhập
        </Button>
      </Box>
    </Box>
  );
}

export default LoginForm;
