import { useState } from "react";
import "./NewPages.css";
import useScrollReveal from "../hooks/useScrollReveal";

const faqs = [
  { q: "How do I book?", a: "Simply reach out via WhatsApp with a brief introduction — your name, preferred date and time, duration, and whether you'd like incall or outcall. I'll confirm availability and guide you through the next steps." },
  { q: "Is a deposit required?", a: "Yes — an AUD $150 deposit via Bank Transfer or BTC is required to secure all bookings. This is applied towards your total. The remainder is due in cash upon meeting." },
  { q: "What is incall vs outcall?", a: "Incall means you visit me at my location. Outcall means I come to you — your home, hotel, or another agreed location. Both are available." },
  { q: "Do you travel?", a: "Yes — I'm available for travel both within Australia and internationally via FMTY (Fly Me To You). A 3-hour minimum applies, with airfare and hotel covered by you." },
  { q: "What is the Girlfriend Experience (GFE)?", a: "The GFE is a companionship experience that feels natural and genuine — think real conversation, warmth, affection, and connection. It's about quality time with someone who is fully present with you." },
  { q: "How far in advance should I book?", a: "I recommend booking at least 24–48 hours in advance to ensure availability. Same-day bookings may be possible but are not guaranteed." },
  { q: "What is your cancellation policy?", a: "Cancellations made less than 24 hours before the scheduled time forfeit the deposit. In the rare event I must cancel, your deposit is fully refunded." },
  { q: "Do you see couples?", a: "Yes — couples are welcome. Simply add AUD $400 to any standard rate." },
  { q: "Is screening mandatory?", a: "Yes. A brief screening process is required for all new clients. This protects both of us and ensures a safe, comfortable experience. All information is kept strictly confidential." },
  { q: "What should I bring?", a: "Just yourself — relaxed, genuine, and respectful. The deposit is paid in advance, and the remainder in cash upon meeting. A small gesture like flowers or a gift is always appreciated but never expected." },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{q}</span>
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  const hero = useScrollReveal();
  const list = useScrollReveal();

  return (
    <div className="np-page">
      <div className="np-hero reveal" ref={hero}>
        <p className="np-eyebrow">Questions & Answers</p>
        <h2>FAQ</h2>
        <div className="np-hero-line"><span /><em>Everything You Need to Know</em><span /></div>
        <p className="np-intro">
          Answers to the most common questions. If something isn't covered here,
          feel free to reach out via WhatsApp.
        </p>
      </div>

      <div className="faq-list reveal" ref={list}>
        {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
      </div>
    </div>
  );
}
