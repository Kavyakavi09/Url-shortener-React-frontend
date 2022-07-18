import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Header from './pages/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPass from './pages/ForgetPass';
import Activate from './pages/Activate';
import Reset from './pages/Reset';

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up/:token' element={<Register />} />
          <Route path='/sign-up-activate' element={<Activate />} />
          <Route path='/forgot-password' element={<ForgotPass />} />
          <Route path='/reset-password/:token' element={<Reset />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
