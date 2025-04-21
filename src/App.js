import React, { useState } from 'react';
import './App.css';
import DonationForm from './Components/DonationForm';
import Home from './Components/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'donate':
        return <DonationForm />;
      ;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
     <nav className="nav-bar">
  <div className="nav-brand">GiveHub♥︎ </div>
  <div className="nav-links">
    <button onClick={() => setCurrentPage('home')}>Home</button>
    <button className="donate-btn"  onClick={() => setCurrentPage('donate')}>
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
