import "./Rates.css";
import useScrollReveal from "../hooks/useScrollReveal";
import useRemoteConfig from "../hooks/useRemoteConfig";
import g8Img from "../assets/GalleryImg/g8.jpeg";

const rates = [
  { duration: "30 minutes — GFE (1 shot included)", price: "AUD $200", tag: "★ Satisfy GF Experience" },
  { duration: "1 Hour — GFE (2 shots included)", price: "AUD $350", tag: "★ Satisfy GF Experience" },
  { duration: "2 Hour ", price: "AUD $500", tag: "★ Satisfy GF Experience" },
  { duration: "4 Hour ", price: "AUD $900", tag: "★ Satisfy GF Experience" },
  { duration: "Natural Anal", price: "AUD $100 extra" },
  { duration: "Overnight — 10 Hours", price: "AUD $1,500" },
  { duration: "Video Call — 1 Time Satisfy", price: "AUD $80" },
];

const testimonials = [
  { text: "Truly unforgettable. Worth every penny.", by: "J.M., Sydney" },
  { text: "The most natural, effortless evening I've had in years.", by: "S.P., Melbourne" },
  { text: "Elegant, warm, and completely genuine.", by: "R.A., Brisbane" },
  { text: "Exceeded every expectation. Absolutely wonderful.", by: "D.K., Dubai" },
  { text: "Impeccable discretion and stunning presence.", by: "M.R., Perth" },
  { text: "Time just disappeared. Highly recommend.", by: "T.H., Adelaide" },
];

function TestimonialTicker() {
  const items = [...testimonials, ...testimonials];
  return (
    <div className="rates-ticker">
      <div className="rates-ticker-track">
        {items.map((t, i) => (
          <span key={i} className="rates-ticker-item">
            <em>"{t.text}"</em> — {t.by}
            <span className="rates-ticker-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Rates() {
  const hero = useScrollReveal();
  const deposit = useScrollReveal();
  const ratesList = useScrollReveal();
  const included = useScrollReveal();
  const notes = useScrollReveal();
  const couples = useScrollReveal();
  const config = useRemoteConfig();

  return (
    <div className="rates-page">

      {/* PROFILE IMAGE */}
      <div className="rates-profile-img">
        <img src={g8Img} alt="Teena" />
        <div className="rates-profile-overlay">
          <span>auteena.com</span>
        </div>
      </div>

      {/* HERO */}
      <div className="rates-hero reveal" ref={hero}>
        <h2>Rates & Booking</h2>
        <div className="rates-hero-line">
          <span /><em>The Girlfriend Experience</em><span />
        </div>
        <p className="rates-intro">
          As a low volume provider I prioritize longer dates — especially those
          that include cocktails, dinner, or a little adventure on the town.
        </p>
      </div>

      {/* DEPOSIT */}
      <div className="deposit-card reveal" ref={deposit}>
        <p className="deposit-card-title">Booking & Deposit</p>
        <div className="deposit-row">
          <span className="deposit-icon">💳</span>
          <span>A <strong>AUD $100 deposit</strong> is due via <strong>Bank Transfer</strong> at the time of booking — this goes towards your total. The remainder is also paid via <strong>bank transfer to my Australian account</strong> prior to our meeting.</span>
        </div>
        <div className="deposit-row deposit-row--trust">
          <span className="deposit-icon">🛡️</span>
          <div className="trust-block">
            <p className="trust-block-title">I Understand Your Hesitation</p>
            <p className="trust-block-intro">I know sending money to someone you haven't met feels risky. Here's why my regulars never think twice:</p>
            <ul className="trust-block-list">
              <li><strong>My real identity is tied to my bank.</strong> Australian banks require full ID verification. If I took your money and disappeared, you'd have a traceable record — I'd be putting myself at legal risk. That alone should tell you I have zero reason to scam anyone.</li>
              <li><strong>My reputation is my livelihood.</strong> One bad review ends a career in this industry. I've built mine over years of genuine, verified encounters — I'm not risking that for $100.</li>
              <li><strong>You'll receive a confirmation.</strong> Once your deposit clears, I send you a personal confirmation with the date, time, and location details. You'll know everything is real before our meeting.</li>
              <li><strong>100% refund if I cancel.</strong> If I can't make it for any reason, your deposit is returned in full — immediately, no questions, no runaround.</li>
              <li><strong>It's not extra — it's part of your total.</strong> The $100 simply holds your spot. It's deducted from the final rate. You're not paying more, just paying earlier.</li>
              <li><strong>It protects both of us.</strong> I've had too many no-shows. A small deposit means you're serious, and I can block real time for you without worrying. It's mutual respect.</li>
            </ul>
            <p className="trust-block-footer">Still unsure? Message me first — I'm happy to chat and answer any questions. No pressure.</p>
          </div>
        </div>

        <div className="deposit-row">
          <span className="deposit-icon">🏦</span>
          <div className="payment-methods">
            <p className="payment-methods-title">Accepted Payment Methods</p>
            <div className="payment-methods-grid">
              <span className="payment-badge">🏦 PayID</span>
              <span className="payment-badge">💳 BSB / Account Transfer</span>
            </div>
            <div className="bank-details">
              <p className="bank-details-title">Bank Transfer Details</p>
              <div className="bank-details-row"><span>Account Name</span><strong>{config.bankName}</strong></div>
              <div className="bank-details-row"><span>BSB</span><strong>{config.bankBSB}</strong></div>
              <div className="bank-details-row"><span>Account Number</span><strong>{config.bankAccount}</strong></div>
            </div>
          </div>
        </div>
        <div className="deposit-row">
          <span className="deposit-icon">⏰</span>
          <span>Cancellations made less than <strong>24 hours</strong> before the scheduled time forfeit the deposit.</span>
        </div>
        <div className="deposit-row">
          <span className="deposit-icon">✦</span>
          <span>In the rare event I must cancel, your deposit will be fully refunded. <em>(20% retained for dates 5 hours or more.)</em></span>
        </div>
      </div>


      {/* RATES */}
      <div className="rates-section-label reveal" ref={ratesList}>
        <h3>Investment</h3>
        <p>Incall · Outcall</p>
      </div>

      <div className="rates-list reveal" ref={ratesList}>
        {rates.map((r) => (
          <div key={r.duration} className={`rate-row${r.preferred ? " preferred" : ""}`}>
            <div className="rate-duration">
              {r.duration}
              {r.tag && <span className="rate-tag">{r.tag}</span>}
            </div>
            <div className={`rate-price${r.small ? " small" : ""}`}>{r.price}</div>
          </div>
        ))}
      </div>

      {/* <TestimonialTicker /> */}




      {/* WHAT'S INCLUDED */}
      <div className="included-section reveal" ref={included}>
        <p className="included-eyebrow">Every booking includes</p>
        <div className="included-grid">
          {[
            { icon: "💬", text: "Genuine conversation & real connection" },
            { icon: "✨", text: "Elegant, well-presented company" },
            { icon: "🔒", text: "Complete discretion & privacy" },
            { icon: "🕰️", text: "Unhurried, fully present time" },
            { icon: "🌹", text: "Warmth, care & personal attention" },
            { icon: "🥂", text: "An experience worth remembering" },
          ].map((item) => (
            <div className="included-item" key={item.text}>
              <span>{item.icon}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* NOTES */}
      <div className="rates-notes reveal" ref={notes}>
        <div className="rates-note">
          🍷 Dates of <strong>3 hours or more</strong> require outside time — drinks, dinner, an event, or an adventure.
        </div>
        <div className="rates-note">
          ✈️ <strong>FMTY</strong> — Fly Me To You. 3 hour minimum with airfare & hotel covered by you.
        </div>
      </div>

      {/* COUPLES */}
      <div className="couples-box reveal" ref={couples}>
        <h4>Are there two of you?</h4>
        <p>For couples, simply add <strong>AUD $400</strong> to any rate above.</p>
      </div>

    </div>
  );
}
