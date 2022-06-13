import { Routes, Route } from 'react-router-dom';
import HomeLayout from './components/layout/HomeLayout/HomeLayout';
import HomePage from './views/Home/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
