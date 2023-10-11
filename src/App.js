import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './pages/user/login';
import Referral from './pages/user/referral';
import Confirmation from './pages/user/confirmation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
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
