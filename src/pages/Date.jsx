import "./Date.css";
import useScrollReveal from "../hooks/useScrollReveal";

const dateIdeas = [
  {
    icon: "🍷",
    title: "Dinner & Wine",
    desc: "A refined evening at a beautiful restaurant — good food, great conversation, and the kind of company that makes the night feel effortless.",
  },
  {
    icon: "🌆",
    title: "City Adventures",
    desc: "Exploring a new neighbourhood, catching an exhibition, or simply wandering somewhere beautiful together with no particular agenda.",
  },
  {
    icon: "🎭",
    title: "Events & Culture",
    desc: "Theatre, live music, private events, or a cocktail bar with the right atmosphere — I'm always happy to be your elegant plus one.",
  },
  {
    icon: "✈️",
    title: "Travel & Getaways",
    desc: "Weekend escapes, city breaks, or longer journeys — I travel well and love discovering new places with the right person.",
  },
  {
    icon: "🕯️",
    title: "Quiet Evenings",
    desc: "Sometimes the most memorable moments are the simplest — a private evening in, unhurried and entirely our own.",
  },
  {
    icon: "🥂",
    title: "Celebrations",
    desc: "A birthday, an anniversary, or simply a reason to celebrate — I'll make sure the occasion feels as special as it deserves.",
  },
];

const etiquette = [
  {
    title: "Reach Out Thoughtfully",
    desc: "A brief, respectful introduction goes a long way. Let me know a little about yourself, the type of date you have in mind, and your preferred timing.",
  },
  {
    title: "Secure Your Booking",
    desc: "An AUD $150 deposit via Bank Transfer or BTC confirms your appointment. This is applied to your total and ensures I hold the time exclusively for you.",
  },
  {
    title: "Arrive as Yourself",
    desc: "There's no need for pretence. I value authenticity above all — come relaxed, be genuine, and let the rest unfold naturally.",
  },
  {
    title: "Discretion is Mutual",
    desc: "Your privacy is as important to me as my own. Every encounter is handled with complete confidentiality and professionalism.",
  },
  {
    title: "Kindness Above All",
    desc: "Respect and warmth are the foundation of every wonderful experience. Bring those, and I promise to bring everything else.",
  },
];

export default function Date() {
  const hero     = useScrollReveal();
  const quote    = useScrollReveal();
  const cards    = useScrollReveal();
  const etiq     = useScrollReveal();
  const closing  = useScrollReveal();

  return (
    <div className="date-page">

      {/* ── HERO ── */}
      <div className="date-hero reveal" ref={hero}>
        <p className="date-eyebrow">The Experience</p>
        <h2>Let's Plan a Date</h2>
        <div className="date-hero-line">
          <span /><em>Refined · Discreet · Memorable</em><span />
        </div>
        <p className="date-intro">
          I believe the best dates are the ones that feel completely natural —
          where time slows down, conversation flows, and the evening takes on
          a life of its own. Here's a little of what I love, and how to make
          it happen.
        </p>
      </div>

      {/* ── MOOD QUOTE ── */}
      <div className="date-quote reveal-scale" ref={quote}>
        <div className="date-quote-mark">“</div>
        <p>The most luxurious thing in the world is not a place or a possession — it's the feeling of being truly seen by someone who is entirely present with you.</p>
      </div>

      {/* ── DATE IDEAS ── */}
      <p className="date-section-title reveal" ref={cards}>What I Enjoy</p>
      <div className="date-cards reveal" ref={cards}>
        {dateIdeas.map((d, i) => (
          <div className={`date-card reveal-delay-${i + 1}`} key={d.title}>
            <span className="date-card-icon">{d.icon}</span>
            <h4>{d.title}</h4>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>

      {/* ── ETIQUETTE ── */}
      <div className="date-etiquette reveal" ref={etiq}>
        <h3 className="date-etiquette-title">How It Works</h3>
        <p className="date-etiquette-sub">A simple guide to our time together</p>
        <div className="etiquette-list">
          {etiquette.map((e, i) => (
            <div className="etiquette-item" key={e.title}>
              <span className="etiquette-num">0{i + 1}</span>
              <div>
                <h5>{e.title}</h5>
                <p>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CLOSING ── */}
      <div className="date-closing reveal" ref={closing}>
        <h3>Ready to Meet?</h3>
        <p>
          I look forward to hearing from you. The best experiences begin with
          a simple hello — so don't hesitate to reach out. I respond to
          genuine, respectful enquiries with care and promptness.
        </p>
        <div className="date-closing-sig">Teena</div>
      </div>

    </div>
  );
}
