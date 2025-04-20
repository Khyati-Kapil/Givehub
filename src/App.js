import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
  
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
     <nav className="nav-bar">
  <div className="nav-brand">GiveHub♥︎</div>
  <div className="nav-links">
    <button onClick={() => setCurrentPage('home')}>Home</button>
    <button className="donate-btn">
      Donate Now 🎁
    </button>
  </div>
</nav>
      
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
