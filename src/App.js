import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './pages/user/login';
import Signup from './pages/user/signup';
import Admlogin from './pages/admin/login';
import Addtherapy from './pages/admin/admAddTherapist';
import Home from './pages/user/home';
import Referral from './pages/user/referral';
import Confirmation from './pages/user/confirmation';
import CaseFile from './pages/user/caseFile';

function App() {
  const [user, setUser] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {user && <Route exact path="/" element={<Home />} />}

          {!user && (
            <Route exact path="/" element={<Login setUser={setUser} />} />
          )}

          <Route path="/admin/login" element={<Admlogin />} />
          <Route path="/admin/therapist/" element={<Addtherapy />} />

          <Route path="/user">
            <Route path="referral" element={<Referral />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="view-case" element={<CaseFile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
