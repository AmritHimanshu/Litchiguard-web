import {
  LayoutDashboard,
  CloudSun,
  Sprout,
  Leaf,
  ScanSearch,
  BookOpen,
  MapPin,
  Droplets,
  Wind,
  ThermometerSun,
  ArrowUpRight,
  CalendarDays,
  Bell,
  Ruler,
  ChevronRight,
  Lightbulb,
  Tractor,
} from "lucide-react";

import translations from "../translations";

import Logo from "../components/Logo";
import LanguageSelector from "../components/LanguageSelector";

const cropDetails = {
  Litchi: {
    icon: "🍒",
    description: "Fruit crop",
    color: "pink",
  },
  Rice: {
    icon: "🌾",
    description: "Food grain",
    color: "gold",
  },
  Wheat: {
    icon: "🌾",
    description: "Food grain",
    color: "gold",
  },
  Maize: {
    icon: "🌽",
    description: "Food grain",
    color: "green",
  },
  Mango: {
    icon: "🥭",
    description: "Fruit crop",
    color: "orange",
  },
  Potato: {
    icon: "🥔",
    description: "Vegetable crop",
    color: "brown",
  },
  Vegetables: {
    icon: "🥬",
    description: "Vegetable crops",
    color: "green",
  },
  Other: {
    icon: "🌱",
    description: "Other crop",
    color: "green",
  },
};

function Dashboard({ farmerProfile, language, setLanguage }) {
  const t = translations[language] || translations.en;

  const farmerName = farmerProfile?.name || "Farmer";
  const crops = farmerProfile?.crops || [];

  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">
          <Logo />
        </div>

        <div className="sidebar-label">MAIN MENU</div>

        <nav className="sidebar-navigation">
          <a className="sidebar-link active" href="#overview">
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </a>

          <a className="sidebar-link" href="#my-crops">
            <Sprout size={19} />
            <span>{t.myCrops}</span>
          </a>

          <a className="sidebar-link" href="#weather">
            <CloudSun size={19} />
            <span>{t.weather}</span>
          </a>

          <a className="sidebar-link" href="#crop-health">
            <ScanSearch size={19} />
            <span>{t.diseaseDetection}</span>
          </a>

          <a className="sidebar-link" href="#advisory">
            <BookOpen size={19} />
            <span>{t.farmAdvisory}</span>
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <div className="help-icon">
              <Lightbulb size={20} />
            </div>
            <strong>Need farming guidance?</strong>
            <p>{t.guidanceDescription}</p>
            <a href="#advisory">
              Explore advisory <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="sidebar-footer">
            <span>© 2026 LitchiGuard AI</span>
            <span>Farmer Advisory Platform</span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="dashboard-content">
        {/* Top bar */}
        <header className="dashboard-topbar">
          <div className="topbar-title">
            <span>FARMER PORTAL</span>
            <h2>Dashboard</h2>
          </div>

          <div className="topbar-actions">
            <LanguageSelector language={language} setLanguage={setLanguage} />

            <div className="notification-icon" title="Notifications">
              <Bell size={19} />
              <span />
            </div>

            <div className="topbar-profile">
              <div className="topbar-avatar">
                {farmerName.charAt(0).toUpperCase()}
              </div>
              <div>
                <strong>{farmerName}</strong>
                <span>Farmer</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard body */}
        <div className="dashboard-body">
          {/* Welcome section */}
          <section className="dashboard-welcome" id="overview">
            <div>
              <span className="welcome-date">
                <CalendarDays size={15} /> {today}
              </span>

              <h1>
                Namaste, {farmerName.split(" ")[0]}! <span>👋</span>
              </h1>

              <p>
                Welcome to your farming dashboard. Here is an overview of your
                farm and agricultural services.
              </p>

              <div className="welcome-location">
                <MapPin size={16} />
                {farmerProfile?.village}, {farmerProfile?.district}
              </div>
            </div>

            <div className="welcome-illustration">
              <div className="welcome-illustration-circle">
                <Tractor size={75} strokeWidth={1.2} />
              </div>
              <div className="illustration-leaf leaf-one">🌿</div>
              <div className="illustration-leaf leaf-two">🌱</div>
            </div>
          </section>

          {/* Summary cards */}
          <section className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-icon stat-green">
                <Sprout size={21} />
              </div>
              <div>
                <span>Registered Crops</span>
                <strong>{crops.length}</strong>
                <small>Selected crops</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-orange">
                <Ruler size={21} />
              </div>
              <div>
                <span>Total Land Area</span>
                <strong>
                  {farmerProfile?.landArea || 0}
                  <small className="stat-unit"> acres</small>
                </strong>
                <small>Registered farmland</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-blue">
                <MapPin size={21} />
              </div>
              <div>
                <span>Farm Location</span>
                <strong className="location-stat">
                  {farmerProfile?.district || "Not set"}
                </strong>
                <small>{farmerProfile?.village || ""}</small>
              </div>
            </div>
          </section>

          {/* Weather section */}
          <section className="dashboard-section" id="weather">
            <div className="section-title-row">
              <div>
                <span className="section-eyebrow">WEATHER CONDITIONS</span>
                <h2>Weather Overview</h2>
              </div>
              <span className="sample-label">DEMO DATA</span>
            </div>

            <div className="weather-card">
              <div className="weather-main">
                <div className="weather-location">
                  <MapPin size={16} />
                  {farmerProfile?.district || "Your district"}
                </div>

                <div className="weather-temperature">
                  <CloudSun size={58} strokeWidth={1.4} />
                  <div>
                    <strong>28°</strong>
                    <span>Partly Cloudy</span>
                  </div>
                </div>

                <p>Sample weather information for demonstration only.</p>
              </div>

              <div className="weather-details">
                <div className="weather-detail">
                  <div className="weather-detail-icon">
                    <Droplets size={19} />
                  </div>
                  <div>
                    <span>Humidity</span>
                    <strong>65%</strong>
                  </div>
                </div>

                <div className="weather-detail">
                  <div className="weather-detail-icon">
                    <Wind size={19} />
                  </div>
                  <div>
                    <span>Wind Speed</span>
                    <strong>12 km/h</strong>
                  </div>
                </div>

                <div className="weather-detail">
                  <div className="weather-detail-icon">
                    <ThermometerSun size={19} />
                  </div>
                  <div>
                    <span>Rainfall</span>
                    <strong>0 mm</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* My crops */}
          <section className="dashboard-section" id="my-crops">
            <div className="section-title-row">
              <div>
                <span className="section-eyebrow">YOUR FARM</span>
                <h2>My Crops</h2>
                <p className="section-description">
                  Crops registered in your farmer profile.
                </p>
              </div>
              <span className="crop-count">{crops.length} crops</span>
            </div>

            {crops.length > 0 ? (
              <div className="crop-card-grid">
                {crops.map((crop) => {
                  const details = cropDetails[crop] || {
                    icon: "🌱",
                    description: "Registered crop",
                    color: "green",
                  };

                  return (
                    <div className="dashboard-crop-card" key={crop}>
                      <div className={`crop-emoji crop-${details.color}`}>
                        {details.icon}
                      </div>

                      <div className="crop-card-info">
                        <h3>{crop}</h3>
                        <span>{details.description}</span>
                      </div>

                      <div className="crop-card-arrow">
                        <ChevronRight size={19} />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>No crops have been registered yet.</p>
            )}
          </section>

          {/* Quick services */}
          <section className="dashboard-section" id="crop-health">
            <div className="section-title-row">
              <div>
                <span className="section-eyebrow">FARMER SERVICES</span>
                <h2>Explore Services</h2>
                <p className="section-description">
                  Useful tools and services for your farming activities.
                </p>
              </div>
            </div>

            <div className="service-card-grid">
              <a className="service-card" href="#advisory">
                <div className="service-icon service-green">
                  <BookOpen size={24} />
                </div>
                <h3>Crop Advisory</h3>
                <p>Access crop-related information and farming guidance.</p>
                <span>
                  Explore advisory <ArrowUpRight size={15} />
                </span>
              </a>

              <div className="service-card service-coming-soon">
                <div className="service-icon service-orange">
                  <ScanSearch size={24} />
                </div>
                <h3>Disease Detection</h3>
                <p>Identify possible crop diseases using crop images.</p>
                <span>Coming in a future phase</span>
              </div>

              <a className="service-card" href="#weather">
                <div className="service-icon service-blue">
                  <CloudSun size={24} />
                </div>
                <h3>Weather Information</h3>
                <p>
                  View weather conditions relevant to your farming location.
                </p>
                <span>
                  View weather <ArrowUpRight size={15} />
                </span>
              </a>
            </div>
          </section>

          {/* Advisory */}
          <section className="dashboard-section" id="advisory">
            <div className="section-title-row">
              <div>
                <span className="section-eyebrow">FARMING GUIDANCE</span>
                <h2>General Farm Advisory</h2>
              </div>
              <span className="sample-label">DEMO CONTENT</span>
            </div>

            <div className="advisory-card">
              <div className="advisory-icon">
                <Lightbulb size={23} />
              </div>

              <div className="advisory-content">
                <h3>Good Farming Practices</h3>
                <p>
                  Regularly monitor your crops for visible signs of pest
                  attacks, disease symptoms and water stress. Follow locally
                  recommended agricultural practices and consult an agricultural
                  expert when needed.
                </p>
                <span>
                  General information · Not a crop-specific prescription
                </span>
              </div>
            </div>
          </section>

          <footer className="dashboard-page-footer">
            <Logo />
            <span>
              © 2026 LitchiGuard AI Farmer Advisory. All rights reserved.
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
