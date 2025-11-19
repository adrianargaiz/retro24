/**
 * RETRO24 - Login Screen
 * Pantalla de inicio de sesión con rainbow stripes al 45% de opacidad
 *
 * Diseño basado en especificaciones exactas del mockup
 */

import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { GoogleIcon, AppleIcon } from '../components/icons';
import './Login.css';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de login (por implementar)
    console.log('Login con:', email, password);
    // Navigate to home page after login
    history.push('/home');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // history.push('/forgot-password');
  };

  const handleRegister = () => {
    console.log('Register clicked');
    history.push('/register');
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // TODO: Implement Google OAuth login
  };

  const handleAppleLogin = () => {
    console.log('Apple login clicked');
    // TODO: Implement Apple OAuth login
  };

  return (
    <IonPage>
      <IonContent className="login-content" scrollY={false}>
        <div className="login-container">

          {/* Rainbow Stripes Background - 45% opacity */}
          <div className="login-rainbow-stripes">
            <div className="login-stripe login-stripe-pink"></div>
            <div className="login-stripe login-stripe-red"></div>
            <div className="login-stripe login-stripe-orange"></div>
            <div className="login-stripe login-stripe-yellow"></div>
            <div className="login-stripe login-stripe-green"></div>
            <div className="login-stripe login-stripe-blue"></div>
          </div>

          {/* Main Content */}
          <div className="login-main">

            {/* Title Section */}
            <div className="login-header">
              <h1 className="login-title">Welcome to Retro24!</h1>
            </div>

            {/* Form Section */}
            <div className="login-form">

              {/* Email Input */}
              <div className="login-input-wrapper">
                <IonInput
                  type="email"
                  placeholder="Email"
                  value={email}
                  onIonInput={(e) => setEmail(e.detail.value!)}
                  className="login-input"
                  aria-label="Email address"
                />
              </div>

              {/* Password Input */}
              <div className="login-input-wrapper">
                <IonInput
                  type="password"
                  placeholder="Password"
                  value={password}
                  onIonInput={(e) => setPassword(e.detail.value!)}
                  className="login-input"
                  aria-label="Password"
                />
              </div>

              {/* Login Button */}
              <div className="login-button-wrapper">
                <IonButton
                  className="login-button"
                  onClick={handleLogin}
                  expand="block"
                >
                  Login
                </IonButton>
              </div>

              {/* Social Login Divider */}
              <div className="login-divider">
                <span className="login-divider-text">or</span>
              </div>

              {/* Social Login Icons */}
              <div className="login-social">
                <button
                  className="login-social-button"
                  onClick={handleGoogleLogin}
                  type="button"
                  aria-label="Login with Google"
                >
                  <GoogleIcon width={40} height={40} />
                </button>
                <button
                  className="login-social-button"
                  onClick={handleAppleLogin}
                  type="button"
                  aria-label="Login with Apple"
                >
                  <AppleIcon width={40} height={40} />
                </button>
              </div>

              {/* Forgot Password Link */}
              <div className="login-forgot">
                <button
                  className="login-forgot-link"
                  onClick={handleForgotPassword}
                  type="button"
                >
                  Forgot password?
                </button>
              </div>

            </div>

            {/* Register Link */}
            <div className="login-register">
              <button
                className="login-register-link"
                onClick={handleRegister}
                type="button"
              >
                Don't have an account? Register!
              </button>
            </div>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
