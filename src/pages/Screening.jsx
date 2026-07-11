import "./NewPages.css";
import useScrollReveal from "../hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Your Name", desc: "A first name is all I need — no full legal name required at this stage." },
  { num: "02", title: "Brief Introduction", desc: "A few sentences about yourself — your profession, how you found me, and what kind of experience you're looking for." },
  { num: "03", title: "Reference or Verification", desc: "A reference from another provider you've seen, or a form of professional verification (LinkedIn, work email, etc.). This is standard practice and protects us both." },
  { num: "04", title: "Booking Details", desc: "Your preferred date, time, duration, and whether you'd like incall or outcall." },
];

export default function Screening() {
  const hero  = useScrollReveal();
  const why   = useScrollReveal();
  const s1 = useScrollReveal(); const s2 = useScrollReveal();
  const s3 = useScrollReveal(); const s4 = useScrollReveal();
  const bottom = useScrollReveal();

  const refs = [s1, s2, s3, s4];

  return (
    <div className="np-page">
      <div className="np-hero reveal" ref={hero}>
        <p className="np-eyebrow">Before We Meet</p>
        <h2>Screening</h2>
        <div className="np-hero-line"><span /><em>Safety · Trust · Mutual Respect</em><span /></div>
        <p className="np-intro">
          Screening is a standard and necessary part of my booking process.
          It protects both of us and ensures that every encounter begins with
          a foundation of trust and safety.
        </p>
      </div>

      <div className="screening-why reveal" ref={why}>
        <h3>Why I Screen</h3>
        <p>
          I take my personal safety seriously — and I hope you do too. Screening
          is not a reflection of distrust. It is simply how I ensure that the
          people I meet are genuine, respectful, and serious about their enquiry.
          All information shared is kept strictly confidential and never stored
          beyond our initial contact.
        </p>
      </div>

      <p className="np-section-label">What I Ask For</p>
      <div className="screening-steps">
        {steps.map((s, i) => (
          <div className="screening-step reveal" ref={refs[i]} key={s.num}>
            <span className="screening-num">{s.num}</span>
            <div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="screening-bottom reveal" ref={bottom}>
        <h4>Your Privacy is Guaranteed</h4>
        <p>
          All screening information is used solely to verify your identity before
          our meeting. It is never shared, sold, or stored after our encounter.
          I treat your privacy with the same care I expect for my own.
        </p>
      </div>
    </div>
  );
}
