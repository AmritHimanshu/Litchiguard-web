import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import Logo from "../components/Logo";

function VerifyOTP({ phone, onVerify, onBack }) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    onVerify(otp, setError);
  };

  return (
    <div className="otp-page">
      <header className="otp-header">
        <Logo />
      </header>

      <main className="otp-main">
        <div className="otp-card">
          <button className="back-button" onClick={onBack}>
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="otp-icon">
            <Smartphone size={30} />
          </div>

          <span className="eyebrow">PHONE VERIFICATION</span>

          <h1>Verify your number</h1>

          <p className="otp-description">
            Enter the six-digit verification code to continue.
          </p>

          <div className="otp-phone-display">
            <span>{phone}</span>
            <button onClick={onBack}>Change</button>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="otp">Enter OTP</label>

            <input
              id="otp"
              className="otp-input"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="------"
              maxLength={6}
              value={otp}
              onChange={(event) => {
                setOtp(event.target.value.replace(/\D/g, ""));
                setError("");
              }}
            />

            {error && <div className="form-error">{error}</div>}

            <button className="primary-button" type="submit">
              Verify and Continue
              <ArrowRight size={19} />
            </button>
          </form>

          <div className="demo-code-box">
            <div className="demo-code-heading">
              <ShieldCheck size={18} />
              Demo verification code
            </div>

            <div className="demo-code">123456</div>

            <p>
              This is a demo application. Use the above code to verify your
              number. No SMS is sent.
            </p>
          </div>
        </div>
      </main>

      <footer className="otp-footer">
        © 2026 LitchiGuard AI Farmer Advisory
      </footer>
    </div>
  );
}

export default VerifyOTP;