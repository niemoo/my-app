import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home Page</>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
