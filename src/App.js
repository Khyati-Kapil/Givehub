import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import DonationForm from './Components/DonationForm';
import Home from './Components/Home';
import GetStarted from './Components/GetStarted';
import { auth, provider } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import Reward from './Components/Reward';
import History from './Components/History';
import Sidebar from './Components/Sidebar';

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      alert('Logout failed: ' + err.message);
    }
  };


  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('getStarted');

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'history', label: 'My Donations', icon: '📜' },
    { id: 'reward', label: 'My Rewards', icon: '🎖️' },
    { id: 'contact', label: 'Contact', icon: '📞' },
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'getStarted':
        return <GetStarted onGetStarted={() => setCurrentPage('home')} onLogin={handleLogin} user={user} />;
      case 'home':
        return <Home setCurrentPage={setCurrentPage} user={user} onLogin={handleLogin} onLogout={handleLogout} />;
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
