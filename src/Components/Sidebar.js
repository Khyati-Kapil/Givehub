import React from 'react';
import '../Styles/Sidebar.css';


function Sidebar({ onMenuItemClick, visible = true, onClose }) {
  if (!visible) return null;

  return (
    <aside className="sidebar">
     
      <video autoPlay muted loop playsInline className="sidebar-bg-video">
        <source src="/sidebar-bg.mp4" type="video/mp4" />

      </video>


      
      <div className="sidebar-brand">GiveHub♥︎</div>

     
      <nav className="sidebar-nav">
        <button className="sidebar-btn" onClick={() => onMenuItemClick('home')}>
          Home
        </button>
        
        <button className="sidebar-btn" onClick={() => onMenuItemClick('reward')}>
          My Rewards
        </button>
        <button className="sidebar-btn" onClick={() => onMenuItemClick('history')}>
          My Donations
        </button>
        <button className="sidebar-btn cta-btn" onClick={() => onMenuItemClick('donate')}>
          Donate Now 🎁
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;

