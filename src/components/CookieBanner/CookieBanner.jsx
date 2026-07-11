import { useState } from "react";
import "./CookieBanner.css";

export default function CookieBanner() {
  const [hidden, setHidden] = useState(() => !!localStorage.getItem("cookie_ok"));

  const accept = () => {
    localStorage.setItem("cookie_ok", "1");
    setHidden(true);
  };

  if (hidden) return null;

  return (
    <div className="cookie-banner">
      <p>This site uses cookies to ensure the best experience. By continuing to browse you accept our use of cookies.</p>
      <button onClick={accept}>Got it</button>
    </div>
  );
}
