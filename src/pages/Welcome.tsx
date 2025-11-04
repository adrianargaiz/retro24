/**
 * RETRO24 - Welcome Screen
 * Pantalla de bienvenida con rainbow stripes y camera lens
 *
 * Diseño basado en especificaciones exactas del mockup
 */

import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Welcome.css';
import lenteImage from '../assets/images/lente.png';

const Welcome: React.FC = () => {
  const history = useHistory();

  const handleStart = () => {
    // Navegación a la siguiente pantalla (por implementar)
    console.log('Navegando a la siguiente pantalla...');
    // history.push('/home');
  };

  return (
    <IonPage>
      <IonContent className="welcome-content" scrollY={false}>
        <div className="welcome-container">

          {/* Rainbow Stripes Background */}
          <div className="rainbow-stripes">
            <div className="stripe stripe-pink"></div>
            <div className="stripe stripe-red"></div>
            <div className="stripe stripe-orange"></div>
            <div className="stripe stripe-yellow"></div>
            <div className="stripe stripe-green"></div>
            <div className="stripe stripe-blue"></div>
          </div>

          {/* Main Content */}
          <div className="welcome-main">

            {/* Title Section */}
            <div className="welcome-header">
              <h1 className="welcome-title">Welcome!</h1>
            </div>

            {/* Camera Lens Image */}
            <div className="welcome-lens-container">
              <img
                src={lenteImage}
                alt="Camera Lens"
                className="welcome-lens"
              />
            </div>

            {/* Subtitle and Description */}
            <div className="welcome-text">
              <h2 className="welcome-subtitle">
                Give your events the retro vibe
              </h2>
              <p className="welcome-description">
                Immortalize your memories in a unique way
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="welcome-cta">
              <IonButton
                className="welcome-button"
                onClick={handleStart}
                expand="block"
              >
                Let's Start
              </IonButton>
            </div>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
