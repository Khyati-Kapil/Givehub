import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import DonationForm from './Components/DonationForm';
import Home from './Components/Home';
import Reward from './Components/Reward';
import History from './Components/History';
import Sidebar from './Components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'history', label: 'My Donations', icon: '📜' },
    { id: 'reward', label: 'My Rewards', icon: '🎖️' },
    { id: 'contact', label: 'Contact', icon: '📞' },
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'donate':
        return <DonationForm />;
      case 'reward':
        return <Reward />;
      case 'history':
        return <History />;  
      default:
        return <Home />;
    }
  };

  const scrollToFooterRef = useRef(false);

  const handleMenuItemClick = (id) => {
    if (id === 'contact') {
      if (currentPage === 'home') {
        const footer = document.getElementById('footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        scrollToFooterRef.current = true;
        setCurrentPage('home');
      }
    } else {
      setCurrentPage(id);
    }
  };

  useEffect(() => {
    if (currentPage === 'home' && scrollToFooterRef.current) {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
      scrollToFooterRef.current = false;
    }
  }, [currentPage]);

  return (
    <div className="App">
      {!sidebarOpen && (
        <button
          className="sidebar-hamburger-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
          style={{ position: 'fixed', top: 20, left: 20, zIndex: 300, fontSize: 28, background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ☰
        </button>
      )}
      <Sidebar
        menuItems={menuItems}
        onMenuItemClick={handleMenuItemClick}
        currentPage={currentPage}
        visible={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="main-content sidebar-offset">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
