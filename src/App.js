import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './pages/user/login';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
