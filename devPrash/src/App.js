import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-container">
        <Header />
      </div>
    </div>
  );
}

export default App;