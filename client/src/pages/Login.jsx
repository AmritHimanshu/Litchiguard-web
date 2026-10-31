import { useState } from "react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Sprout,
  CloudSun,
  Leaf,
  Tractor,
} from "lucide-react";

import Logo from "../components/Logo";
import LanguageSelector from "../components/LanguageSelector";

function Login({ onSendOTP, language, setLanguage }) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const isHindi = language === "hi";

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanedPhone = phone.replace(/\D/g, "");

    if (cleanedPhone.length !== 10) {
      setError(
        isHindi
          ? "कृपया 10 अंकों का मोबाइल नंबर दर्ज करें।"
          : "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    setError("");
    onSendOTP(`+91${cleanedPhone}`);
  };

  return (
    <div className="auth-page">
      <div className="auth-header">
        <Logo />
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
        />
      </div>

      <main className="auth-main">
        <section className="auth-visual">
          <div className="visual-content">
            <div className="visual-badge">
              <Sprout size={16} />
              {isHindi ? "स्मार्ट कृषि समाधान" : "SMART AGRICULTURE SOLUTIONS"}
            </div>

            <h1>
              {isHindi
                ? "बेहतर खेती, बेहतर भविष्य।"
                : "Smarter Farming, Better Future."}
            </h1>

            <p>
              {isHindi
                ? "किसानों के लिए सही समय पर सही कृषि सलाह। तकनीक के साथ अपनी खेती को बेहतर बनाएं।"
                : "Get timely agricultural guidance, crop insights and practical recommendations to make better farming decisions."}
            </p>

            <div className="visual-feature-list">
              <div className="visual-feature">
                <div className="feature-icon">
                  <CloudSun size={21} />
                </div>
                <div>
                  <strong>
                    {isHindi ? "मौसम आधारित सलाह" : "Weather-based guidance"}
                  </strong>
                  <span>
                    {isHindi
                      ? "मौसम के अनुसार खेती की सलाह"
                      : "Recommendations based on conditions"}
                  </span>
                </div>
              </div>

              <div className="visual-feature">
                <div className="feature-icon">
                  <Leaf size={21} />
                </div>
                <div>
                  <strong>
                    {isHindi ? "फसल संबंधी जानकारी" : "Crop information"}
                  </strong>
                  <span>
                    {isHindi
                      ? "फसल की देखभाल और सुरक्षा"
                      : "Crop care and protection"}
                  </span>
                </div>
              </div>

              <div className="visual-feature">
                <div className="feature-icon">
                  <Tractor size={21} />
                </div>
                <div>
                  <strong>
                    {isHindi ? "किसान केंद्रित समाधान" : "Farmer-focused solutions"}
                  </strong>
                  <span>
                    {isHindi
                      ? "सरल और उपयोगी कृषि जानकारी"
                      : "Simple and practical agricultural information"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="visual-decoration decoration-one" />
          <div className="visual-decoration decoration-two" />

          <div className="visual-footer">
            LitchiGuard AI Farmer Advisory
          </div>
        </section>

        <section className="auth-form-section">
          <div className="auth-card">
            <div className="mobile-brand">
              <Logo />
            </div>

            <div className="form-icon">
              <Phone size={25} />
            </div>

            <div className="form-heading">
              <span className="eyebrow">
                {isHindi ? "किसान पोर्टल" : "FARMER PORTAL"}
              </span>

              <h2>
                {isHindi ? "स्वागत है!" : "Welcome back!"}
              </h2>

              <p>
                {isHindi
                  ? "आगे बढ़ने के लिए अपना मोबाइल नंबर दर्ज करें।"
                  : "Enter your mobile number to access your farmer account."}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="phone">
                {isHindi ? "मोबाइल नंबर" : "Mobile Number"}
              </label>

              <div className="phone-input">
                <div className="country-code">
                  <span>🇮🇳</span>
                  <span>+91</span>
                </div>

                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="Enter 10-digit number"
                  value={phone}
                  maxLength={10}
                  onChange={(event) => {
                    setPhone(event.target.value.replace(/\D/g, ""));
                    setError("");
                  }}
                />
              </div>

              {error && <div className="form-error">{error}</div>}

              <button className="primary-button" type="submit">
                {isHindi ? "OTP प्राप्त करें" : "Send OTP"}
                <ArrowRight size={19} />
              </button>
            </form>

            <div className="security-note">
              <ShieldCheck size={18} />
              <span>
                {isHindi
                  ? "आपकी जानकारी सुरक्षित रखी जाती है।"
                  : "Your information is protected and secure."}
              </span>
            </div>

            <div className="demo-notice">
              <span className="demo-dot" />
              DEMO MODE — No real SMS will be sent
            </div>

            <p className="auth-copyright">
              © 2026 LitchiGuard AI. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;