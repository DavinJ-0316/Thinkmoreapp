import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Header from './apps/Header';
import UserLayout from './apps/UserLayout';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<div>HomePage</div>} />
          <Route path="/user/*" element={<UserLayout />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
