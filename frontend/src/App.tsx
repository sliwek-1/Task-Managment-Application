import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import ProtectedRoutes from './routes/protectedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {
          // public routes
        }
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

        {
          // private routes
        }

        <Route element={<ProtectedRoutes />}>
            <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
