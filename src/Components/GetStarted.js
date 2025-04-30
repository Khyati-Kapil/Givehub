import React from 'react';
import './GetStarted.css';


const GetStarted = ({ onGetStarted, onLogin, user }) => {
  return (
    <div className="get-started-container">
      <video className="get-started-bg-video" autoPlay loop muted playsInline>
        <source src="/sidebar-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="get-started-content">
        
        <h1 className="get-started-title">Welcome to GiveHub♥︎</h1>
        <p className="get-started-description">
          Make a difference by donating and earn exciting rewards!<br />
          Join our community of generous donors and start your journey today.
        </p>
        <button className="get-started-btn" onClick={onGetStarted}>
          Get Started
        </button>
        {!user && (
          <button className="get-started-btn login-btn" onClick={onLogin} style={{marginBottom:16}}>
            Login with Google
          </button>
        )}
      </div>
    </div>
  );
};

export default GetStarted;
