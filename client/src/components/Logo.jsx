import { Sprout } from "lucide-react";

function Logo({ light = false }) {
  return (
    <div className={`brand-logo ${light ? "brand-logo-light" : ""}`}>
      <div className="brand-icon">
        <Sprout size={27} strokeWidth={2.2} />
      </div>

      <div className="brand-text">
        <h2>LitchiGuard</h2>
        <span>AI FARMER ADVISORY</span>
      </div>
    </div>
  );
}

export default Logo;