import { Languages } from "lucide-react";

function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="language-selector">
      <Languages size={17} />

      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>
    </div>
  );
}

export default LanguageSelector;