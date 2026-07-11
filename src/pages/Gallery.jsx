import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Gallery.css";

import g1 from "../assets/GalleryImg/g1.jpeg";
import g2 from "../assets/GalleryImg/g2.jpeg";
import g3 from "../assets/GalleryImg/g3.jpeg";
import g4 from "../assets/GalleryImg/g4.jpeg";
import g5 from "../assets/GalleryImg/g5.jpeg";
import g6 from "../assets/GalleryImg/g6.jpeg";
import g7 from "../assets/GalleryImg/g7.jpeg";
import g8 from "../assets/GalleryImg/g8.jpeg";
import g9 from "../assets/GalleryImg/g9.jpeg";
import g10 from "../assets/GalleryImg/g10.jpeg";
import g11 from "../assets/GalleryImg/g11.jpeg";
import g12 from "../assets/GalleryImg/g12.jpeg";
import g13 from "../assets/GalleryImg/g13.jpeg";
import g14 from "../assets/GalleryImg/g14.jpeg";
import g15 from "../assets/GalleryImg/g15.jpeg";
import g16 from "../assets/GalleryImg/g16.jpeg";
import g17 from "../assets/GalleryImg/g17.jpeg";
import g18 from "../assets/GalleryImg/g18.jpeg";
import g19 from "../assets/GalleryImg/g19.jpeg";

const images = [g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19];

function getItemClass(index) {
  const pos = index % 4;
  if (pos === 0) return "gallery-item big-left";
  if (pos === 3) return "gallery-item big-right";
  return "gallery-item small";
}

const block = (e) => e.preventDefault();

function AnimatedItem({ src, className, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); observer.unobserve(el); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} reveal-scale`} style={{ transitionDelay: `${(index % 4) * 0.1}s` }}>
      <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" onContextMenu={block} onDragStart={block} />
      <div className="img-shield" />
      <div className="gallery-overlay">
        <span className="gallery-overlay-icon">✦</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="gallery-page">

      {/* ── HERO ── */}
      <div className="gallery-hero">
        <p className="gallery-eyebrow">A Visual Introduction</p>
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-hero-line">
          <span /><em>Refined · Elegant · Authentic</em><span />
        </div>
        <p className="gallery-subtitle">
          A curated selection of photographs — each one a glimpse into the warmth,
          elegance and presence you can expect when we meet.
        </p>
        <div className="gallery-counter">
          <span className="gallery-counter-num">{images.length}</span>
          <span className="gallery-counter-label">photographs</span>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="gallery-grid">
        {images.map((src, i) => (
          <AnimatedItem key={i} src={src} className={getItemClass(i)} index={i} />
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="gallery-cta">
        <p className="gallery-cta-eyebrow">Like what you see?</p>
        <h3>Let's Meet in Person</h3>
        <p>The best version of me is the one you'll meet face to face.</p>
        <div className="gallery-cta-btns">
          <NavLink to="/date" className="gallery-cta-primary">Plan a Date</NavLink>
          <NavLink to="/contact" className="gallery-cta-secondary">Get in Touch</NavLink>
        </div>
      </div>

    </div>
  );
}
