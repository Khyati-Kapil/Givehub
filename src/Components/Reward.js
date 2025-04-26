import React from "react";
import "../Styles/Reward.css";
import { useState, useEffect } from "react";

function Reward() {
    const[points, setPoints] = useState(0);
    const[rewards, setRewards] = useState([]);

    useEffect(() => {
        const storedPoints = parseInt(localStorage.getItem('points')||'0');
        const storedRewards = JSON.parse(localStorage.getItem('rewards')||'[]');
        setPoints(storedPoints);
        setRewards(storedRewards);

    },[]);
    const nextReward = 10-(points%10);
    return (
        <div className="reward">
          <h2>Your Rewards</h2>
          
          <div className="points">
            <div className="points-display">
              <h3>Total Points: {points}</h3>
              <p>{nextReward} more donations until your next reward!</p>
            </div>
            
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${(points % 10) * 10}%` }}
              ></div>
            </div>
          </div>
    
          <div className="rewards-section">
            <h3>Your rewards</h3>
            {rewards.length === 0 ? (
              <p>No rewards yet. Donate more items to earn rewards!</p>
            ) : (
              <div className="rewards-list">
                {rewards.map((voucher, index) => (
                  <div key={index} className="voucher-card">
                    <div className="voucher-code">{voucher}</div>
                    <p>10% off at partner stores</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }
    
    export default Reward;
