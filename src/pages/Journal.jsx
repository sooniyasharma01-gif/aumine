import "./NewPages.css";
import useScrollReveal from "../hooks/useScrollReveal";

const posts = [
  {
    date: "April 2025",
    tag: "Dining",
    title: "The Art of a Perfect Dinner",
    excerpt: "There's something about a beautifully set table, soft lighting, and a menu you actually want to explore together. My favourite restaurants aren't always the most famous — they're the ones where the evening slows down and conversation takes over.",
  },
  {
    date: "March 2025",
    tag: "Travel",
    title: "A Weekend in Melbourne",
    excerpt: "Melbourne in early autumn is something else entirely. The light is different — softer, more golden. I spent a weekend wandering Fitzroy, eating pastries I didn't need, and remembering why slow travel is always the best kind.",
  },
  {
    date: "February 2025",
    tag: "Thoughts",
    title: "On Genuine Connection",
    excerpt: "People often ask what makes a great date. My honest answer is simple: presence. Not the restaurant, not the outfit, not the occasion — just two people who are actually there, actually listening, actually curious about each other.",
  },
  {
    date: "January 2025",
    tag: "Culture",
    title: "An Evening at the Opera",
    excerpt: "I've always loved live performance — the way a story can hold an entire room in silence. Saw a stunning production at the Sydney Opera House recently. There's something about sharing that kind of experience with someone that makes it twice as memorable.",
  },
];

export default function Journal() {
  const hero = useScrollReveal();
  const r1 = useScrollReveal(); const r2 = useScrollReveal();
  const r3 = useScrollReveal(); const r4 = useScrollReveal();
  const refs = [r1, r2, r3, r4];

  return (
    <div className="np-page">
      <div className="np-hero reveal" ref={hero}>
        <p className="np-eyebrow">Musings & Moments</p>
        <h2>Journal</h2>
        <div className="np-hero-line"><span /><em>Places · Thoughts · Experiences</em><span /></div>
        <p className="np-intro">
          A quiet corner of the site where I share things I love — places I've
          visited, thoughts on connection, and the small moments that make life
          worth savouring.
        </p>
      </div>

      <div className="journal-grid">
        {posts.map((p, i) => (
          <div className="journal-card reveal" ref={refs[i]} key={p.title}>
            <div className="journal-card-top">
              <span className="journal-tag">{p.tag}</span>
              <span className="journal-date">{p.date}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
            <span className="journal-read">Read more →</span>
          </div>
        ))}
      </div>
    </div>
  );
}
