import React from "react";
import "../Styles/History.css";
import { useState, useEffect } from "react";
function History() {
    const[donations, setDonations] = useState([]);
    useEffect(() => {
        const stored= JSON.parse(localStorage.getItem('donations')||'[]');
        setDonations(stored);
    },[])
    return (
        <div className="history">
          <h2>Your Donation History</h2>
          <div className="donations-list">
            {donations.length === 0 ? (
              <p>No donations yet.</p>
            ) : (
              donations.map(donation => (
                <div key={donation.id} className="donation-card">
                  {donation.image && (
                    <div className="donation-image">
                      <img src={donation.image} alt={donation.description} />
                    </div>
                  )}
                  <div className="donation-details">
                    <h3>{donation.category}</h3>
                    <p>{donation.description}</p>
                    <p className="location">📍 {donation.location}</p>
                    <p className="date">{new Date(donation.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      );
    }
    
    export default History;