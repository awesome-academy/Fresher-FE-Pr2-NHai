import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function HomeLayout() {
  return (
    <Container maxWidth='lg'>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default HomeLayout;
