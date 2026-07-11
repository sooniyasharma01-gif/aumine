import "./Intro.css";
import introImage from "../assets/GalleryImg/g11.jpeg";
import infoImage from "../assets/GalleryImg/g4.jpeg";
import g1 from "../assets/GalleryImg/g1.jpeg";
import g2 from "../assets/GalleryImg/g2.jpeg";
import g3 from "../assets/GalleryImg/g3.jpeg";
import g5 from "../assets/GalleryImg/g5.jpeg";
import g7 from "../assets/GalleryImg/g7.jpeg";
import useScrollReveal from "../hooks/useScrollReveal";
import useParallax from "../hooks/useParallax";
import { NavLink } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";

const carouselImages = [g1, g2, g3, introImage, g5, g7];

const block = (e) => e.preventDefault();

const traits = [
  { icon: "✦", title: "Genuine Presence",    desc: "I don't just show up — I arrive fully. My attention is entirely yours, unhurried and undivided." },
  { icon: "◈", title: "Natural Elegance",    desc: "Comfortable in a Michelin-starred restaurant or a quiet corner of a jazz bar — I adapt effortlessly to any setting." },
  { icon: "❋", title: "Complete Discretion", desc: "Your privacy is sacred to me. Every encounter is handled with absolute confidentiality and professionalism." },
];

const trustBadges = [
  { icon: "✔", label: "Verified Identity" },
  { icon: "🔒", label: "100% Discreet" },
  { icon: "⭐", label: "Premium Experience" },
  { icon: "💬", label: "Responsive" },
  { icon: "🛡️", label: "Safe & Screened" },
  { icon: "✈️", label: "Available to Travel" },
];

const timeline = [
  { time: "7:00 PM", title: "Arrival",          desc: "You arrive. I open the door looking my best — warm smile, soft scent, and a glass already poured." },
  { time: "7:30 PM", title: "Dinner",            desc: "A beautiful restaurant, candlelight, and conversation that flows like we've known each other for years." },
  { time: "9:30 PM", title: "The Evening",       desc: "A walk, a cocktail bar, or simply back somewhere private — wherever the night takes us, unhurried." },
  { time: "11:00 PM", title: "The Best Part",    desc: "No rush. No clock-watching. Just two people fully present in a moment worth remembering." },
];

const marqueeItems = [
  "Refined Companionship",
  "✦",
  "Genuine Connection",
  "✦",
  "Complete Discretion",
  "✦",
  "Australia",
  "✦",
  "The Girlfriend Experience",
  "✦",
  "Incall & Outcall",
  "✦",
  "Available to Travel",
  "✦",
  "Luxury Companion",
  "✦",
];

export default function Intro() {
  const heroText  = useScrollReveal();
  const heroImg   = useScrollReveal();
  const whySec    = useScrollReveal();
  const w1 = useScrollReveal(); const w2 = useScrollReveal(); const w3 = useScrollReveal();
  const avail     = useScrollReveal();
  const trust     = useScrollReveal();
  const timeline1 = useScrollReveal();
  const infoImg   = useScrollReveal();
  const infoText  = useScrollReveal();
  const ctaRef    = useScrollReveal();

  const parallax1 = useParallax(0.1);
  const parallax2 = useParallax(0.08);

  return (
    <div className="intro-page">

      {/* ── HERO ── */}
      <div className="intro-hero">
        <div className="intro-text reveal reveal-left" ref={heroText}>
          <p className="intro-eyebrow">Welcome</p>
          <h2>Hi, I'm <em>Teena...</em></h2>
          <div className="intro-divider"><div className="intro-divider-dot" /></div>
          <p>I'm a warm, naturally elegant woman with a genuine love for meaningful connection. Whether over a candlelit dinner, a quiet evening in, or an adventure across the city — I bring presence, warmth, and an effortless sense of ease to every moment we share.</p>
          <p>Conversation flows naturally with me. I'm curious, attentive, and genuinely interested in the person across from me. I appreciate the finer things — not out of habit, but because I believe beautiful experiences are worth savouring.</p>
          <p>Discretion, mutual respect, and genuine chemistry are at the heart of everything I do. I take great care in curating experiences that feel personal, unhurried, and truly memorable.</p>
          <h3>What You Can Expect</h3>
          <p>A companion who is fully present — engaged, warm, and attentive. Every encounter is approached with care and intention, so you can arrive as yourself, relax completely, and leave feeling genuinely seen and appreciated.</p>
          <p className="signature">With warmth,<span>Teena</span></p>
        </div>

        <div className="intro-image reveal reveal-right" ref={heroImg}>
          <Carousel images={carouselImages} />
          <div className="intro-image-badge">
            <p>Based in</p>
            <strong>Australia</strong>
          </div>
          <div className="last-seen-badge">
            <span className="last-seen-dot" />
            <span>Active today</span>
          </div>
        </div>
      </div>

      {/* ── MARQUEE TICKER ── */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ── TRUST SECTION ── */}
      <div className="trust-section reveal" ref={trust}>
        <p className="trust-eyebrow">Why clients choose me</p>
        <div className="trust-badges">
          {trustBadges.map((b) => (
            <div className="trust-badge" key={b.label}>
              <span className="trust-icon">{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY ── */}
      <div className="why-section reveal" ref={whySec}>
        <p className="why-eyebrow">Why time with me</p>
        <h3 className="why-title">An Experience Unlike Any Other</h3>
        <div className="why-cards">
          {traits.map((t, i) => {
            const refs = [w1, w2, w3];
            return (
              <div className={`why-card reveal reveal-delay-${i + 1}`} ref={refs[i]} key={t.title}>
                <span className="why-icon">{t.icon}</span>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── AVAILABILITY ── */}
      <div className="avail-banner reveal" ref={avail}>
        <span className="avail-dot" />
        <p>Currently accepting new bookings &nbsp;·&nbsp; Limited availability &nbsp;·&nbsp; Book early to secure your date</p>
      </div>

      {/* ── TIMELINE ── */}
      <div className="timeline-section reveal" ref={timeline1}>
        <p className="timeline-eyebrow">An evening together</p>
        <h3 className="timeline-title">A Date With Teena</h3>
        <div className="timeline">
          {timeline.map((t, i) => (
            <div className="timeline-item" key={t.time}>
              <div className="timeline-left">
                <span className="timeline-time">{t.time}</span>
              </div>
              <div className="timeline-center">
                <div className="timeline-dot" />
                {i < timeline.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-right">
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="section-divider"><div className="section-divider-diamond" /></div>

      {/* ── INFO ── */}
      <div className="intro-info">
        <div className="info-image-side reveal reveal-left" ref={infoImg}>
          <img src={infoImage} alt="Teena" ref={parallax2} className="parallax-img" onContextMenu={block} onDragStart={block} />
          <div className="img-shield" />
        </div>
        <div className="info-text-side reveal reveal-right" ref={infoText}>
          <p className="info-eyebrow">A little about me</p>
          <h3 className="info-title">For The Imagination</h3>
          <div className="info-grid">
            <div className="info-cell"><label>Height</label>5'4 / 165 cm</div>
            <div className="info-cell"><label>Age</label>Mid 20s</div>
            <div className="info-cell"><label>Hair</label>Dark Brown</div>
            <div className="info-cell"><label>Eyes</label>Dark Brown</div>
            <div className="info-cell"><label>Ethnicity</label>Indian</div>
            <div className="info-cell"><label>Languages</label>Hindi, English, Punjabi</div>
            <div className="info-cell full"><label>Available To</label>All respectful adults of legal age — kindness is always appreciated.</div>
            <div className="info-cell"><label>Favourite Cuisines</label>Asian, Mediterranean</div>
            <div className="info-cell"><label>Favourite Drinks</label>Passion fruit tea, mocktails</div>
            <div className="info-cell"><label>Favourite Flowers</label>Damask Rose</div>
            <div className="info-cell"><label>Favourite Scent</label>Pomegranate</div>
            <div className="info-cell full"><label>Perfect Date</label>Watching the sunset by the water — golden light, calm air, and a conversation that goes on longer than expected.</div>
          </div>
        </div>
      </div>

      {/* ── CLOSING CTA ── */}
      <div className="intro-cta reveal" ref={ctaRef}>
        <p className="intro-cta-eyebrow">Ready to meet?</p>
        <h3>Let's Create Something Memorable</h3>
        <p>Every great experience begins with a simple hello. I'd love to hear from you.</p>
        <div className="intro-cta-btns">
          <NavLink to="/date" className="intro-cta-primary">Plan a Date</NavLink>
          <NavLink to="/rates" className="intro-cta-secondary">View Rates</NavLink>
        </div>
      </div>

    </div>
  );
}
