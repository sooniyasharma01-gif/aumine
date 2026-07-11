import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header      from "./components/Header/Header";
import Footer      from "./components/Footer/Footer";
import BookCTA     from "./components/BookCTA/BookCTA";
import AgeGate     from "./components/AgeGate/AgeGate";
import Loader      from "./components/Loader/Loader";
import BackToTop   from "./components/BackToTop/BackToTop";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import NotePopup   from "./components/NotePopup/NotePopup";

import Intro        from "./pages/Intro";
import Gallery      from "./pages/Gallery";
import Date         from "./pages/Date";
import Rates        from "./pages/Rates";
import Contact      from "./pages/Contact";
import Screening    from "./pages/Screening";
import FAQ          from "./pages/FAQ";
import Availability from "./pages/Availability";
import Journal      from "./pages/Journal";
import Wishlist     from "./pages/Wishlist";
import NotFound     from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function CursorGlow() {
  const glowRef = useRef(null);
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    let raf;
    const move = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return <div id="cursor-glow" ref={glowRef} />;
}

function PageWrapper({ children }) {
  const location = useLocation();
  const [curtain, setCurtain] = useState(false);
  const prev = useRef(location.pathname);

  useEffect(() => {
    if (prev.current !== location.pathname) {
      setCurtain(true);
      const t = setTimeout(() => setCurtain(false), 560);
      prev.current = location.pathname;
      return () => clearTimeout(t);
    }
  }, [location.pathname]);

  return (
    <>
      {curtain && <div className="page-curtain" />}
      <div key={location.pathname} className="page-enter">{children}</div>
    </>
  );
}

export default function App() {
  const [ageVerified, setAgeVerified] = useState(() => !!sessionStorage.getItem("age_ok"));
  const [loading, setLoading]         = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  const handleAgeEnter = () => {
    sessionStorage.setItem("age_ok", "1");
    setAgeVerified(true);
  };

  if (!ageVerified) return <AgeGate onEnter={handleAgeEnter} />;
  if (loading)      return <Loader />;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CursorGlow />
      <ProgressBar />
      <Header />

      <main style={{ flex: 1 }}>
        <PageWrapper>
          <Routes>
            <Route path="/"            element={<Intro />} />
            <Route path="/intro"       element={<Intro />} />
            <Route path="/gallery"     element={<Gallery />} />
            <Route path="/rates"       element={<Rates />} />
            <Route path="/date"        element={<Date />} />
            <Route path="/contact"     element={<Contact />} />
            <Route path="/screening"   element={<Screening />} />
            <Route path="/faq"         element={<FAQ />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/journal"     element={<Journal />} />
            <Route path="/wishlist"    element={<Wishlist />} />
            <Route path="/privacy"     element={<PrivacyPolicy />} />
            <Route path="*"            element={<NotFound />} />
          </Routes>
        </PageWrapper>
      </main>

      <Footer />
      <BookCTA />
      <BackToTop />
      <CookieBanner />
      <NotePopup />
    </div>
  );
}
