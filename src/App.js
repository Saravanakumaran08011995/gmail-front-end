import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importing the components

import Inbox from './components/Inbox';
import Compose from './components/Compose';
import Sent from './components/Sent';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Starred from './components/Starred';






function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          <div className="routes-wrapper">
            <Routes>
              <Route path="/" element={<Compose />} />
              <Route path="/compose" element={<Compose />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/starred" element={<Starred />} />
              <Route path="/sent" element={<Sent />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;