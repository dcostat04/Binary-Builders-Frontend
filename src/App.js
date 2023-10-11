import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './pages/user/login';
import Signup from './pages/user/signup';
import Admlogin from './pages/admin/login';
import Addtherapy from './pages/admin/admAddTherapist';
import Home from './pages/user/home';

function App() {
  localStorage.setItem('res', false);
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/admin/login" element={<Admlogin />} />
          <Route path="/admin/therapist/" element={<Addtherapy />} />
          <Route path="/user/login" element={<Login />} />
          {localStorage.getItem('res') ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route exact path="/" element={<Login />} />
          )}
          <Route path="/user" >
            <Route path="referral" element={<Referral />} />
            <Route path="confirmation" element={<Confirmation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}


export default App;
