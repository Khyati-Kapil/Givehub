import React, { useState, useEffect } from 'react';
import '../Styles/Reward.css';

function Reward() {
  const [points, setPoints] = useState(0);
  

  useEffect(() => {
    const storedPoints = parseInt(localStorage.getItem('points') || '0');
   
    setPoints(storedPoints);
    
  }, []);

  const nextRewardIn = 10 - (points % 10);

  return (
    <div className="reward-wallet">
      <div className="special-campaign-banner">🎉 <b>Special Campaign:</b> Double points for all donations this month!</div>
      <div className="points-section">
        <div className="points-display">
          <h3>Total Points: {points}</h3>
          <p>{nextRewardIn} more donations until your next reward!</p>
        </div>
        
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${(points % 10) * 10}%` }}
          ></div>
        </div>
      </div>
      
      <div className="faq-section">
        <h4>Frequently Asked Questions</h4>
        <details>
          <summary>How do I earn points?</summary>
          <p>You earn 1 point for every successful donation.</p>
        </details>
        <details>
          <summary>How do I get a voucher?</summary>
          <p>For every 10 donations, you receive a reward voucher automatically.</p>
        </details>
        <details>
          <summary>How do I redeem my voucher?</summary>
          <p>Use your voucher code at checkout at any partner store or online platform.</p>
        </details>
      </div>
      
    </div>
  );
}

export default Reward;
