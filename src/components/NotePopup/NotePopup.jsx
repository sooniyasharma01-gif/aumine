import { useState, useEffect } from "react";
import "./NotePopup.css";
import useRemoteConfig from "../../hooks/useRemoteConfig";

export default function NotePopup() {
  const config = useRemoteConfig();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => !!sessionStorage.getItem("note_dismissed"));

  const WA_URL = `https://wa.me/${config.phone}?text=${encodeURIComponent(config.whatsappMessage || "Hi Teena, I'd love to connect with you.")}`;

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
