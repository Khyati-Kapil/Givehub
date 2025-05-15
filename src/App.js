import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import DonationForm from './Components/DonationForm';
import Home from './Components/Home';
import GetStarted from './Components/GetStarted';
import { auth, provider } from './firebase';
import { signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import Reward from './Components/Reward';
import History from './Components/History';
import Sidebar from './Components/Sidebar';

function App() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

 
  React.useEffect(() => {
    let resolvedRedirect = false;
    let resolvedAuth = false;

   
    function finishLoading() {
      if (resolvedRedirect && resolvedAuth) setLoading(false);
    }

  
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          setUser(result.user);
        }
      })
      .catch((error) => {
        if (error && error.message) {
          console.error('Redirect login failed:', error.message);
        }
      })
      .finally(() => {
        resolvedRedirect = true;
        finishLoading();
      });


    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      resolvedAuth = true;
      finishLoading();
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        const result = await signInWithPopup(auth, provider);
        if (!result.user) {
          alert('Login failed: No user returned from provider.');
          console.error('No user object returned from signInWithPopup:', result);
        }
      } else {
        await signInWithRedirect(auth, provider);
      }
    } catch (err) {
      alert('Login failed: ' + err.message);
      console.error('Login error:', err);
    }
  };


  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      alert('Logout failed: ' + err.message);
      console.error('Logout error:', err);
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

 

  const handleMenuItemClick = (id) => {
    if (id === 'contact') {
      if (currentPage === 'home') {
        const footer = document.getElementById('footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setCurrentPage(id);
    }
  };

  useEffect(() => {
    if (currentPage === 'home' ) {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
     
    }
  }, [currentPage]);

  if (loading) {
    return (
      <div className="App">
        <div style={{textAlign: 'center', marginTop: '20vh', fontSize: 24}}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      
      <Sidebar
        menuItems={menuItems}
        onMenuItemClick={handleMenuItemClick}
        currentPage={currentPage}
      />
      <main className="main-content sidebar-offset">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
