import React, { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import UserIcon from '../components/icons/UserIcon';
import HomeIcon from '../components/icons/HomeIcon';
import CameraIcon from '../components/icons/CameraIcon';
import RollsIcon from '../components/icons/RollsIcon';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();
  const [remainingRolls] = useState(0);
  const [totalRolls] = useState(5);

  // Get current date in format: "Thursday, 21 Oct"
  const getCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'short'
    };
    return date.toLocaleDateString('en-US', options).replace(',', ',');
  };

  const handleCreateNewRoll = () => {
    history.push('/camera');
  };

  const handleSeePastRolls = () => {
    // TODO: Navigate to past rolls screen
    console.log('See past rolls');
  };

  const handleNavHome = () => {
    history.push('/home');
  };

  const handleNavCamera = () => {
    history.push('/camera');
  };

  const handleNavRolls = () => {
    // TODO: Navigate to rolls
    console.log('Navigate to rolls');
  };

  return (
    <IonPage>
      <IonContent fullscreen className="home-content">
        {/* Rainbow Stripes Background */}
        <div className="home-rainbow-stripes">
          <div className="home-stripe home-stripe-pink"></div>
          <div className="home-stripe home-stripe-red"></div>
          <div className="home-stripe home-stripe-orange"></div>
          <div className="home-stripe home-stripe-yellow"></div>
          <div className="home-stripe home-stripe-green"></div>
          <div className="home-stripe home-stripe-blue"></div>
        </div>

        {/* Main Container */}
        <div className="home-container">
          {/* Header with Date and User Icon */}
          <header className="home-header">
            <div className="date-text">{getCurrentDate()}</div>
            <button className="user-button" aria-label="User profile">
              <UserIcon size={32} color="#2C2A2B" />
            </button>
          </header>

          {/* Center Content - Ring Counter */}
          <div className="home-center">
            <div className="roll-counter-container">
              {/* Ring/Circle */}
              <div className="roll-ring">
                <div className="roll-counter">
                  <div className="counter-number">
                    {remainingRolls}/{totalRolls}
                  </div>
                  <div className="counter-subtitle">remaining rolls</div>
                </div>
              </div>
            </div>

            {/* Text Below Ring */}
            <div className="message-container">
              <h1 className="message-title">You still have rolls left</h1>
              <p className="message-subtitle">Let's create new memories!</p>
            </div>

            {/* Buttons */}
            <div className="home-actions">
              <button
                className="btn-primary btn-create-roll"
                onClick={handleCreateNewRoll}
                aria-label="Create new roll"
              >
                Create new roll
              </button>

              <button
                className="btn-secondary btn-past-rolls"
                onClick={handleSeePastRolls}
                aria-label="See past rolls"
              >
                See past rolls
              </button>
            </div>
          </div>

          {/* Bottom Navigation */}
          <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
            <button
              className="nav-button active"
              onClick={handleNavHome}
              aria-label="Home"
              aria-current="page"
            >
              <HomeIcon size={28} color="#2C2A2B" />
            </button>

            <button
              className="nav-button"
              onClick={handleNavCamera}
              aria-label="Camera"
            >
              <CameraIcon size={28} color="#2C2A2B" />
            </button>

            <button
              className="nav-button"
              onClick={handleNavRolls}
              aria-label="Rolls"
            >
              <RollsIcon size={28} color="#2C2A2B" />
            </button>
          </nav>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
