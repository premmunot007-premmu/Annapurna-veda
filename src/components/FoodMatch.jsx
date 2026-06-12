import React, { useState } from 'react';
import './FoodMatch.css'; // This will hold all the styles for the page

function FoodChecker() {
  const [food1, setFood1] = useState('Avocado');
  const [food2, setFood2] = useState('Almonds');

  return (
    <div className="checker-body">
      <div className="checker-container">
        
        {/* --- Header Section --- */}
        <header className="checker-header card">
          <h1>Food Compatibility Checker</h1>
          <p>Compare two food items to check for compatibility based on your dietary preferences and potential interactions.</p>
        </header>

        {/* --- Main Content Area --- */}
        <main className="checker-main">
          
          {/* Left Column: Form */}
          <div className="checker-form card">
            <h2>Check Two Foods</h2>
            <form>
              <div className="input-group">
                <label htmlFor="food1">Enter Food Item 1...</label>
                <input 
                  type="text" 
                  id="food1" 
                  value={food1} 
                  onChange={(e) => setFood1(e.target.value)} 
                />
              </div>
              <div className="input-group">
                <label htmlFor="food2">Enter Food Item 2...</label>
                <input 
                  type="text" 
                  id="food2" 
                  value={food2} 
                  onChange={(e) => setFood2(e.target.value)} 
                />
              </div>
              <div className="preferences-section">
                <p>Checking against your preferences:</p>
                <div className="tags-container">
                  <span className="tag">Vegan</span>
                  <span className="tag">Gluten-Free</span>
                  <span className="tag">Peanut Allergy</span>
                  <a href="#" className="edit-link">[Edit Preferences]</a>
                </div>
              </div>
              <button type="submit" className="check-button">
                Check Compatibility
              </button>
            </form>
          </div>

          {/* Right Column: Report */}
          <div className="checker-report card">
            <h2><span className="report-icon">Hb.</span> Compatibility Report</h2>
            <div className="report-alert">
              <span className="warning-icon">⚠</span>
              <span>Potential Issues Found</span>
            </div>
            <div className="report-card">
              <h3>Avocado<br/>Almonds</h3>
              <p className="compatibility-status">Partially Compatible</p>
              <p className="compatibility-details">
                Both high in healthy fats; ensure balanced portion in daily goals. No direct conflicts with selected dietary preferences.
              </p>
              <a href="#" className="details-link">[View Details]</a>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default FoodChecker;