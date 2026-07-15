import { useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import "./CityPage.css";
import { cityData } from "../data/cityData";

export default function CityPage() {
  const { city } = useParams();
  const data = cityData[city];

  const hero = useScrollReveal();
  const about = useScrollReveal();
  const services = useScrollReveal();
  const areas = useScrollReveal();
  const cta = useScrollReveal();
  const faq = useScrollReveal();

  useEffect(() => {
    if (data) {
      document.title = data.title;
    }
  }, [data]);

  if (!data) {
    return (
      <div className="city-page">
        <div className="city-not-found">
          <h2>City not found</h2>
          <p>Looking for companionship in another city? <NavLink to="/contact">Get in touch</NavLink> — I travel across Australia.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="city-page">

      {/* HERO */}
      <div className="city-hero reveal" ref={hero}>
        <p className="city-eyebrow">{data.eyebrow}</p>
        <h1 className="city-h1">{data.heading}</h1>
        <div className="city-hero-line">
          <span /><em>{data.subheading}</em><span />
        </div>
        <p className="city-intro-text">{data.introText}</p>
      </div>

      {/* ABOUT SECTION */}
      <div className="city-about reveal" ref={about}>
        <h2>About Teena — {data.cityName}</h2>
        {data.aboutParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* SERVICES */}
      <div className="city-services reveal" ref={services}>
        <h2>What I Offer in {data.cityName}</h2>
        <div className="city-services-grid">
          {data.services.map((s, i) => (
            <div className="city-service-card" key={i}>
              <span className="city-service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AREAS */}
      <div className="city-areas reveal" ref={areas}>
        <h2>Areas I Cover in {data.cityName}</h2>
        <p className="city-areas-intro">Available for incall and outcall across {data.cityName} and surrounding areas:</p>
        <div className="city-areas-tags">
          {data.areas.map((area, i) => (
            <span className="city-area-tag" key={i}>{area}</span>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="city-faq reveal" ref={faq}>
        <h2>Frequently Asked — {data.cityName}</h2>
        <div className="city-faq-list">
          {data.faqs.map((f, i) => (
            <details className="city-faq-item" key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="city-cta reveal" ref={cta}>
        <h2>Ready to Meet in {data.cityName}?</h2>
        <p>I'd love to hear from you. Whether you're planning ahead or looking for a last-minute connection, reach out and let's make it happen.</p>
        <div className="city-cta-btns">
          <NavLink to="/contact" className="city-cta-primary">Get in Touch</NavLink>
          <NavLink to="/rates" className="city-cta-secondary">View Rates</NavLink>
        </div>
      </div>

      {/* OTHER CITIES */}
      <div className="city-other">
        <p className="city-other-label">Also available in</p>
        <div className="city-other-links">
          {Object.keys(cityData)
            .filter((c) => c !== city)
            .map((c) => (
              <NavLink to={`/${c}`} key={c} className="city-other-link">
                {cityData[c].cityName}
              </NavLink>
            ))}
        </div>
      </div>

    </div>
  );
}
