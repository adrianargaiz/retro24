/**
 * RETRO24 - Camera Page
 * Full-screen camera view for capturing photos in 4:3 aspect ratio
 *
 * Features:
 * - Native camera access via Capacitor Camera API
 * - 4:3 aspect ratio enforcement
 * - Flash toggle (ON/OFF states)
 * - Back navigation
 * - Mobile-first design
 */

import React, { useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { Camera as CapacitorCamera, CameraResultType, CameraSource } from '@capacitor/camera';
import BackArrowIcon from '../components/icons/BackArrowIcon';
import FlashOffIcon from '../components/icons/FlashOffIcon';
import FlashOnIcon from '../components/icons/FlashOnIcon';
import './Camera.css';

const Camera: React.FC = () => {
  const history = useHistory();
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

  /**
   * Handle back navigation
   */
  const handleBack = () => {
    history.goBack();
  };

  /**
   * Toggle flash on/off
   */
  const handleFlashToggle = () => {
    setFlashEnabled(!flashEnabled);
  };

  /**
   * Capture photo using Capacitor Camera API
   * Enforces 4:3 aspect ratio
   */
  const handleCapture = async () => {
    try {
      const photo = await CapacitorCamera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 90,
        width: 1600, // 4:3 aspect ratio (1600x1200)
        height: 1200,
        correctOrientation: true,
        saveToGallery: false,
        allowEditing: false,
      });

      if (photo.webPath) {
        setCapturedPhoto(photo.webPath);
        // TODO: Handle the captured photo (save to roll, navigate to preview, etc.)
        console.log('Photo captured:', photo.webPath);
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
      // TODO: Handle error (show toast/alert to user)
    }
  };

  return (
    <IonPage>
      <IonContent className="camera-content" scrollY={false}>
        <div className="camera-container">

          {/* Camera View Overlay */}
          <div className="camera-view">
            {capturedPhoto ? (
              <img
                src={capturedPhoto}
                alt="Captured"
                className="camera-preview-image"
              />
            ) : (
              <div className="camera-placeholder">
                <p className="camera-placeholder-text">Tap capture to take a photo</p>
              </div>
            )}
          </div>

          {/* Top Navigation Bar */}
          <div className="camera-top-bar">
            {/* Back Button - Left */}
            <button
              className="camera-nav-button camera-back-button"
              onClick={handleBack}
              aria-label="Go back"
            >
              <BackArrowIcon size={24} color="#FFFFFF" />
            </button>

            {/* Flash Toggle - Right */}
            <button
              className={`camera-nav-button camera-flash-button ${flashEnabled ? 'flash-on' : 'flash-off'}`}
              onClick={handleFlashToggle}
              aria-label={flashEnabled ? 'Flash on - tap to turn off' : 'Flash off - tap to turn on'}
              aria-pressed={flashEnabled}
            >
              {flashEnabled ? (
                <FlashOnIcon size={28} color="#FEB200" />
              ) : (
                <FlashOffIcon size={28} color="#FFFFFF" />
              )}
            </button>
          </div>

          {/* Bottom Capture Button */}
          <div className="camera-bottom-bar">
            <button
              className="camera-capture-button"
              onClick={handleCapture}
              aria-label="Capture photo"
            >
              <div className="camera-capture-inner"></div>
            </button>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Camera;
