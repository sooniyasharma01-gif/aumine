import "./NewPages.css";
import useScrollReveal from "../hooks/useScrollReveal";

const wishes = [
  { emoji: "🌹", category: "Flowers", items: ["Damask Roses", "White Peonies", "Garden Roses"] },
  { emoji: "🍫", category: "Treats", items: ["Koko Black Chocolates", "Adriano Zumbo Macarons", "David Jones hamper"] },
  { emoji: "🕯️", category: "Home", items: ["Glasshouse Fragrances candle", "Aesop room spray", "Circa Home diffuser"] },
  { emoji: "👜", category: "Fashion", items: ["Silk scarf", "Cashmere wrap", "David Jones gift card"] },
  { emoji: "💆", category: "Wellness", items: ["Endota Spa voucher", "Facial treatment", "Aesop gift set"] },
  { emoji: "📚", category: "Books & Culture", items: ["Art books", "Poetry collections", "Theatre tickets (Sydney/Melbourne)"] },
];

export default function Wishlist() {
  const hero = useScrollReveal();
  const grid = useScrollReveal();
  const note = useScrollReveal();

  return (
    <div className="np-page">
      <div className="np-hero reveal" ref={hero}>
        <p className="np-eyebrow">A Little Inspiration</p>
        <h2>Wishlist</h2>
        <div className="np-hero-line"><span /><em>Thoughtful · Personal · Appreciated</em><span /></div>
        <p className="np-intro">
          Gifts are never expected — but always deeply appreciated. If you'd like
          to bring something along or send something ahead of our meeting, here's
          a little inspiration from things I genuinely love.
        </p>
      </div>

      <div className="wishlist-grid reveal" ref={grid}>
        {wishes.map((w) => (
          <div className="wishlist-card" key={w.category}>
            <span className="wishlist-emoji">{w.emoji}</span>
            <h4>{w.category}</h4>
            <ul>
              {w.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wishlist-note reveal" ref={note}>
        <p>✦ &nbsp; A handwritten note with any gift means more than the gift itself.</p>
      </div>
    </div>
  );
}
