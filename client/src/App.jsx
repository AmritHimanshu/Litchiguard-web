
import { useState } from "react";

import Login from "./pages/Login";
import VerifyOTP from "./pages/VerifyOTP";
import FarmerProfile from "./pages/FarmerProfile";
import Dashboard from "./pages/Dashboard";

function App() {
  const [language, setLanguage] = useState("en");
  const [phone, setPhone] = useState("");
  const [currentPage, setCurrentPage] = useState("login");
  const [farmerProfile, setFarmerProfile] = useState(null);

  const handleSendOTP = (mobileNumber) => {
    setPhone(mobileNumber);
    setCurrentPage("verify");
  };

  const handleVerifyOTP = (enteredOTP, setError) => {
    if (enteredOTP !== "123456") {
      setError("Incorrect OTP. Please enter 123456.");
      return;
    }

    setCurrentPage("profile");
  };

  const handleSaveProfile = (profileData) => {
    setFarmerProfile(profileData);
    setLanguage(profileData.preferredLanguage);
    setCurrentPage("dashboard");
  };

  if (currentPage === "verify") {
    return (
      <VerifyOTP
        phone={phone}
        onVerify={handleVerifyOTP}
        onBack={() => setCurrentPage("login")}
      />
    );
  }

  if (currentPage === "profile") {
    return (
      <FarmerProfile
        phone={phone}
        onSave={handleSaveProfile}
        language={language}
        setLanguage={setLanguage}
      />
    );
  }

  if (currentPage === "dashboard") {
    return (
      <Dashboard
        farmerProfile={farmerProfile}
        language={language}
        setLanguage={setLanguage}
      />
    );
  }

  return (
    <Login
      onSendOTP={handleSendOTP}
      language={language}
      setLanguage={setLanguage}
    />
  );
}

export default App;
