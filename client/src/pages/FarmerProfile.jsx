
import { useState } from "react";
import {
  UserRound,
  MapPin,
  Sprout,
  Ruler,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Logo from "../components/Logo";
import LanguageSelector from "../components/LanguageSelector";
import translations from "../translations";

const availableCrops = [
  "Litchi",
  "Rice",
  "Wheat",
  "Maize",
  "Mango",
  "Potato",
  "Vegetables",
  "Other",
];

function FarmerProfile({ phone, onSave, language, setLanguage }) {
  const t = translations[language] || translations.en;

  const [formData, setFormData] = useState({
    name: "",
    village: "",
    district: "",
    crops: [],
    landArea: "",
    preferredLanguage: language,
  });

  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
    setError("");
  };

  const toggleCrop = (crop) => {
    setFormData((previous) => ({
      ...previous,
      crops: previous.crops.includes(crop)
        ? previous.crops.filter((item) => item !== crop)
        : [...previous.crops, crop],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.village.trim() ||
      !formData.district.trim() ||
      formData.crops.length === 0 ||
      !formData.landArea ||
      Number(formData.landArea) <= 0
    ) {
      setError(t.completeFields);
      return;
    }

    onSave({
      ...formData,
      phone,
      landArea: Number(formData.landArea),
    });
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <Logo />
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
        />
      </header>

      <main className="profile-main">
        <div className="profile-heading">
          <div className="profile-heading-icon">
            <Sprout size={28} />
          </div>

          <span className="eyebrow">{t.farmerRegistration}</span>
          <h1>{t.setupProfile}</h1>
          <p>{t.profileDescription}</p>
        </div>

        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="profile-section">
            <div className="section-heading">
              <UserRound size={20} />
              <div>
                <h3>{t.personalInfo}</h3>
                <p>{t.basicDetails}</p>
              </div>
            </div>

            <div className="profile-field">
              <label htmlFor="farmerName">{t.farmerName} *</label>
              <input
                id="farmerName"
                type="text"
                placeholder={t.enterFullName}
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
            </div>

            <div className="profile-field">
              <label htmlFor="mobileNumber">{t.mobileNumber}</label>
              <input
                id="mobileNumber"
                type="tel"
                value={phone}
                disabled
              />
              <small>{t.verifiedDemo}</small>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-section">
            <div className="section-heading">
              <MapPin size={20} />
              <div>
                <h3>{t.locationDetails}</h3>
                <p>{t.farmLocationQuestion}</p>
              </div>
            </div>

            <div className="profile-grid">
              <div className="profile-field">
                <label htmlFor="village">{t.village} *</label>
                <input
                  id="village"
                  type="text"
                  placeholder={t.villagePlaceholder}
                  value={formData.village}
                  onChange={(e) => updateField("village", e.target.value)}
                />
              </div>

              <div className="profile-field">
                <label htmlFor="district">{t.district} *</label>
                <input
                  id="district"
                  type="text"
                  placeholder={t.districtPlaceholder}
                  value={formData.district}
                  onChange={(e) => updateField("district", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-section">
            <div className="section-heading">
              <Sprout size={20} />
              <div>
                <h3>{t.farmingInfo}</h3>
                <p>{t.cropsQuestion}</p>
              </div>
            </div>

            <div className="profile-field">
              <label>{t.primaryCrops} *</label>
              <p className="field-hint">{t.selectMultiple}</p>

              <div className="crop-options">
                {availableCrops.map((crop) => (
                  <button
                    key={crop}
                    type="button"
                    className={`crop-option ${
                      formData.crops.includes(crop) ? "selected" : ""
                    }`}
                    onClick={() => toggleCrop(crop)}
                  >
                    {formData.crops.includes(crop) && (
                      <CheckCircle2 size={16} />
                    )}
                    {crop}
                  </button>
                ))}
              </div>
            </div>

            <div className="profile-field land-area-field">
              <label htmlFor="landArea">{t.landArea} *</label>
              <div className="land-input-wrapper">
                <Ruler size={18} />
                <input
                  id="landArea"
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="e.g. 2.5"
                  value={formData.landArea}
                  onChange={(e) => updateField("landArea", e.target.value)}
                />
                <span>{t.acres}</span>
              </div>
            </div>
          </div>

          <div className="profile-divider" />

          <div className="profile-section">
            <div className="section-heading">
              <UserRound size={20} />
              <div>
                <h3>{t.preferredLanguage}</h3>
                <p>{t.chooseLanguage}</p>
              </div>
            </div>

            <div className="profile-field">
              <label htmlFor="preferredLanguage">
                {t.preferredLanguage} *
              </label>
              <select
                id="preferredLanguage"
                value={formData.preferredLanguage}
                onChange={(e) => {
                  updateField("preferredLanguage", e.target.value);
                  setLanguage(e.target.value);
                }}
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
              </select>
            </div>
          </div>

          {error && <div className="profile-error">{error}</div>}

          <button className="primary-button profile-submit" type="submit">
            {t.saveContinue}
            <ArrowRight size={19} />
          </button>

          <p className="profile-privacy">{t.profilePrivacy}</p>
        </form>
      </main>
    </div>
  );
}

export default FarmerProfile;
