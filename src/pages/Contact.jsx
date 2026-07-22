import "./NewPages.css";
import useScrollReveal from "../hooks/useScrollReveal";
import useRemoteConfig from "../hooks/useRemoteConfig";

export default function Contact() {
  const hero = useScrollReveal();
  const card = useScrollReveal();
  const config = useRemoteConfig();

  const WA_URL = `https://wa.me/${config.phone}?text=${encodeURIComponent(config.whatsappMessage)}`;
  const TG_URL = `https://t.me/${config.telegramHandle}`;

  return (
    <div className="np-page">
      <div className="np-hero reveal" ref={hero}>
        <p className="np-eyebrow">Get In Touch</p>
        <h2>Let's Connect</h2>
        <div className="np-hero-line"><span /><em>Discreet · Respectful · Genuine</em><span /></div>
        <p className="np-intro">
          The best way to reach me is via WhatsApp. I respond personally to every
          message — please introduce yourself briefly and let me know what you have in mind.
        </p>
      </div>

      <div className="contact-grid reveal" ref={card}>

        <div className="contact-card">
          <span className="contact-icon">💬</span>
          <h4>WhatsApp</h4>
          <p>My preferred method of contact. Quick, private, and direct.</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="contact-btn">
            Message on WhatsApp
          </a>
          <a href={TG_URL} target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-tg">
            Message on Telegram
          </a>
        </div>

        <div className="contact-card">
          <span className="contact-icon">✦</span>
          <h4>A Good Introduction</h4>
          <p>Please include your name, what kind of date you have in mind, your preferred date and time, and whether you're looking for incall or outcall.</p>
        </div>

        <div className="contact-card">
          <span className="contact-icon">🔒</span>
          <h4>Privacy First</h4>
          <p>All conversations are handled with complete discretion. Your details are never stored or shared with anyone.</p>
        </div>

      </div>

      <div className="contact-note reveal">
        <p>⏰ I typically respond within a few hours. I do not respond to one-word messages, explicit requests, or rude enquiries.</p>
      </div>
    </div>
  );
}
