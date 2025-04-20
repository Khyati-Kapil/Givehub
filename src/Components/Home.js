import React from 'react';
import '../Styles/Home.css';
import cloud from './cloud.png';
import clothes from './clothes.png';
import toys from './toys.png';
import Food from './Food.png';


function Home({ setCurrentPage }) {
  return (
    <div className="homepage">  
   <div className="hero">
  <div className="hero-content">
  <div className="corner-deco corner-tl">
  <img src={clothes} alt="Cloud" className="corner-img" />
  <span className="corner-label">Clothes</span>
</div>
<div className="corner-deco corner-tr">
  <img src={Food} alt="Clothes" className="corner-img" />
  <span className="corner-label">Food</span>
</div>
<div className="corner-deco corner-bl">
  <img src={toys} alt="Toys" className="corner-img" />
  <span className="corner-label">Toys</span>
</div>
    
   
    <div className='imgcloud'>
      <img src={cloud} alt="Hero Top Left" className="hero-top-left-image" style={{height: 200 , width: 300}}/>
    </div>
    <h1 className="glow-text">Make a Difference <br/>with<br/> Your Donations</h1>
    <p className="typing-text">Donate items and earn rewards while helping those in need</p>
    <button className="donate-btn">
      Donate Now 🎁
    </button>
  </div>
</div>
      
      <div className="info-boxes">
        <div className="info-box bounce-hover">
          <div className="info-icon-wrapper">
            <span className="info-icon rotating">🎁</span>
          </div>
          <h3>Items Needed</h3>
          <p>Clothes, toys, books, and non-perishable food items</p>
          <div className="particle-burst"></div>
        </div>
        
        <div className="info-box bounce-hover">
          <div className="info-icon-wrapper">
            <span className="info-icon pulse">⭐</span>
          </div>
          <h3>Earn Points</h3>
          <p>Get reward points for every donation you make</p>
          <div className="particle-burst"></div>
        </div>
        
        <div className="info-box bounce-hover">
          <div className="info-icon-wrapper">
            <span className="info-icon shake">🎯</span>
          </div>
          <h3>Track Impact</h3>
          <p>See how your donations are making a difference in the community</p>
          <div className="particle-burst"></div>
        </div>
        
        <div className="info-box bounce-hover">
          <div className="info-icon-wrapper">
            <span className="info-icon pop">🌟</span>
          </div>
          <h3>Get Rewards</h3>
          <p>Unlock special vouchers and discounts with your donation points</p>
          <div className="particle-burst"></div>
        </div>
      </div>
      
      <div className="fun-facts">
        <div className="fun-fact-card flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>Did You Know? 🤔</h3>
              <p>Click to find out!</p>
            </div>
            <div className="flip-card-back">
              <p>Your donations can help provide education to children in need! 📚</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <h3>How It Works</h3>
          <ul>
            <li>Select items to donate</li>
            <li>Upload a photo</li>
            <li>Add description and location</li>
            <li>Earn points for each donation</li>
          </ul>
        </div>
        
        <div className="feature-card">
          <h3>Rewards System</h3>
          <ul>
            <li>10 donations = 1 reward voucher</li>
            <li>Track your progress</li>
            <li>Unlock special rewards</li>
            <li>View your reward wallet</li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We connect donors with those in need, making a positive impact in our community.</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: khyati.kapil@adypu.edu.in</p>
            <p>Phone: 919XXXXX</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <span>LinkedIn</span>
              <span>GitHub</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 GiveHub All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
