import { useEffect, useRef } from "react";

// single shared observer for the whole app
let sharedObserver = null;

function getObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            sharedObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "40px 0px -40px 0px" }
    );
  }
  return sharedObserver;
}

export default function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = getObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return ref;
}
