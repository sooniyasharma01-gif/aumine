import { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const block = (e) => e.preventDefault();

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const timerRef = useRef(null);

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  const onDragStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    setDragging(true);
  };

  const onDragEnd = (e) => {
    if (!dragging) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX.current - endX;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetTimer(); }
    setDragging(false);
  };

  const prev1 = (current - 1 + images.length) % images.length;

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
      >
        {images.map((src, i) => {
          const isActive = i === current;
          const isPrev = i === prev1;
          if (!isActive && !isPrev) return null;
          return (
            <div key={i} className={`carousel-slide ${isActive ? "active" : "prev"}`}>
              <img src={src} alt={`Slide ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} onContextMenu={block} onDragStart={block} />
              <div className="img-shield" />
            </div>
          );
        })}
      </div>

      <button className="carousel-btn carousel-btn-prev" onClick={() => { prev(); resetTimer(); }}>‹</button>
      <button className="carousel-btn carousel-btn-next" onClick={() => { next(); resetTimer(); }}>›</button>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? "active" : ""}`}
            onClick={() => { setCurrent(i); resetTimer(); }}
          />
        ))}
      </div>
    </div>
  );
}
