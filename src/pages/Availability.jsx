import "./NewPages.css";
import useScrollReveal from "../hooks/useScrollReveal";
import useRemoteConfig from "../hooks/useRemoteConfig";

export default function Availability() {
  const hero     = useScrollReveal();
  const sched    = useScrollReveal();
  const notes    = useScrollReveal();
  const cta      = useScrollReveal();
  const config   = useRemoteConfig();

  const WA_URL = `https://wa.me/${config.phone}?text=${encodeURIComponent("Hi Teena, I'd like to check your availability.")}`;

const schedule = [
  { day: "Monday",    status: "available" },
  { day: "Tuesday",   status: "available" },
  { day: "Wednesday", status: "limited"   },
  { day: "Thursday",  status: "available" },
  { day: "Friday",    status: "unavailable" },
  { day: "Saturday",  status: "limited"   },
  { day: "Sunday",    status: "available" },
];

const statusLabel = { available: "Available", limited: "Limited", unavailable: "Unavailable" };

  return (
    <div className="np-page">
      <div className="np-hero reveal" ref={hero}>
        <p className="np-eyebrow">When We Can Meet</p>
        <h2>Availability</h2>
        <div className="np-hero-line"><span /><em>Book Early · Limited Spots</em><span /></div>
        <p className="np-intro">
          I operate as a low-volume provider, which means I keep my schedule
          intentional and my availability selective. Book early to secure your preferred date.
        </p>
      </div>

      <div className="avail-schedule reveal" ref={sched}>
        <p className="np-section-label">Weekly Schedule</p>
        <div className="avail-days">
          {schedule.map((s) => (
            <div className={`avail-day ${s.status}`} key={s.day}>
              <span className="avail-day-name">{s.day}</span>
              <span className={`avail-status-dot ${s.status}`} />
              <span className="avail-status-text">{statusLabel[s.status]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="avail-notes reveal" ref={notes}>
        <div className="avail-note-item">
          <span>🕐</span>
          <p><strong>Hours:</strong> Typically available from midday onwards. Overnight bookings welcome.</p>
        </div>
        <div className="avail-note-item">
          <span>📅</span>
          <p><strong>Advance Notice:</strong> 24–48 hours preferred. Same-day requests considered but not guaranteed.</p>
        </div>
        <div className="avail-note-item">
          <span>✈️</span>
          <p><strong>Travel:</strong> Available for Australian travel and international FMTY with sufficient notice.</p>
        </div>
        <div className="avail-note-item">
          <span>⚡</span>
          <p><strong>Schedule changes:</strong> Availability updates regularly — always confirm via WhatsApp.</p>
        </div>
      </div>

      <div className="avail-cta reveal" ref={cta}>
        <h3>Check My Current Availability</h3>
        <p>For the most up-to-date availability, reach out directly.</p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="contact-btn">
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
}
