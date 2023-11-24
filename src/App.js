import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Header now dynamically sets its title */}
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={
            <div>
              {/* Home page content */}
              <h1>Welcome to the Home Page</h1>
            </div>
          } />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
