import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetFilms } from '../../../store/films/films.thunk';

function HomePage() {
  const film = useSelector((state) => state.film);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFilms());
  }, [dispatch]);

  return <Box component='main'>Main Home</Box>;
}

export default HomePage;