import { useState, useEffect } from "react";
import "./NotePopup.css";

const WA_URL = "https://wa.me/61468258068?text=Hi%20Teena%2C%20I%27d%20love%20to%20connect%20with%20you.";

export default function NotePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => !!sessionStorage.getItem("note_dismissed"));

  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setVisible(true), 30000);
    return () => clearTimeout(t);
  }, [dismissed]);

  const dismiss = () => {
    sessionStorage.setItem("note_dismissed", "1");
    setVisible(false);
    setDismissed(true);
  };

  if (!visible || dismissed) return null;

  return (
    <div className="note-popup">
      <button className="note-close" onClick={dismiss}>✕</button>
      <div className="note-avatar">T</div>
      <div className="note-content">
        <p className="note-name">Teena <span className="note-online" /></p>
        <p className="note-msg">Still browsing? I'd love to hear from you 👋</p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="note-btn" onClick={dismiss}>
          Say Hello on WhatsApp
        </a>
      </div>
    </div>
  );
}
