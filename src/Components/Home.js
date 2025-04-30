import React from 'react';
import '../Styles/Home.css';
import cloud from './cloud.png';
import clothes from './clothes.png';
import toys from './toys.png';
import Food from './Food.png';
import car from './Carousel.avif';
import car1 from './Carousel1.jpg';
import car2 from './Carousel2.jpg';
import car3 from './Carousel3.jpg';


function Home({ setCurrentPage, user, onLogin, onLogout }) {
 
  console.log('Home props:', { user, onLogin, onLogout });


  const handleLogin = onLogin ;

  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-login-wrapper">
          {user ? (
            <div className="user-info">
              <img src={user.photoURL} alt={user.displayName} className="user-avatar" loading="lazy" />
              <span className="user-name">{user.displayName}</span>
              <button className="home-login-btn" onClick={onLogout}>Logout</button>
            </div>
          ) : (
            <button className="home-login-btn" onClick={handleLogin}>Login</button>
          )}
        </div>
        <div className="hero-content">
          <div className="corner-deco corner-tl">
            <img src={clothes} alt="Clothes" className="corner-img" />
            <span className="corner-label">Clothes</span>
          </div>
          <div className="corner-deco corner-tr">
            <img src={Food} alt="Food" className="corner-img" />
            <span className="corner-label">Food</span>
          </div>
          <div className="corner-deco corner-bl">
            <img src={toys} alt="Toys" className="corner-img" />
            <span className="corner-label">Toys</span>
          </div>

          <div className="imgcloud">
            <img
              src={cloud}
              alt="Hero Top Left"
              className="hero-top-left-image"
              style={{ height: 200, width: 300 }}
            />
          </div>

          <h1 className="glow-text">
            Make a Difference <br /> with <br /> Your Donations
          </h1>
          <p className="typing-text">
            Donate items and earn rewards while helping those in need
          </p>
          <button
            className="donate-btn"
            onClick={() => setCurrentPage('donate')}
          >
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


     
      <section className="objectives-section">
        <h2 className="section-title">Our Objectives</h2>
        <div className="objectives-cards">
          <div className="objective-row">
            <div className="objective-card objective-gradient-1">
              <span className="objective-icon">🌍</span>
              <div>
                <h3>Promote Social Good</h3>
                <p>Encourage a culture of giving and social responsibility in our community.</p>
              </div>
            </div>
          </div>
          <div className="objective-row row-reverse">
            <div className="objective-card objective-gradient-2">
              <span className="objective-icon">🤝</span>
              <div>
                <h3>Connect Donors & Recipients</h3>
                <p>Bridge the gap between donors and those in need for meaningful impact.</p>
              </div>
            </div>
          </div>
          <div className="objective-row">
            <div className="objective-card objective-gradient-3">
              <span className="objective-icon">🔄</span>
              <div>
                <h3>Enable Sustainable Giving</h3>
                <p>Promote reusing and recycling items to reduce waste and support sustainability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      

      <div className="carousel">
        <div className="track">
          <img src={car1} alt="1" />
          <img src={car} alt="2" />
          <img src={car2} alt="3" />
          <img src={car3} alt="4" />
          <img src={car} alt="1 duplicate" />
          <img src={car1} alt="2 duplicate" />
          <img src={car2} alt="3 duplicate" />
          <img src={car3} alt="4 duplicate" />
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

