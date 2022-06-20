import { Routes, Route } from 'react-router-dom';
import HomeLayout from './components/layout/HomeLayout/HomeLayout';
import LoginPage from './views/Login/LoginPage/LoginPage';

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/home' element={<HomePage  />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
