import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./fonts.css";
import "./index.css";

// ── IMAGE & CONTENT PROTECTION ──
// Block right-click on images
document.addEventListener("contextmenu", (e) => {
  if (e.target.tagName === "IMG") e.preventDefault();
});
// Block drag on images
document.addEventListener("dragstart", (e) => {
  if (e.target.tagName === "IMG") e.preventDefault();
});
// Block Ctrl+S / Cmd+S (save page), Ctrl+U (view source), Ctrl+Shift+I (devtools)
document.addEventListener("keydown", (e) => {
  if (
    (e.ctrlKey || e.metaKey) &&
    (e.key === "s" || e.key === "S" || e.key === "u" || e.key === "U")
  ) {
    e.preventDefault();
  }
});
// Block pinch zoom on mobile (iOS ignores meta viewport)
document.addEventListener("touchmove", (e) => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });
document.addEventListener("gesturestart", (e) => e.preventDefault());
document.addEventListener("gesturechange", (e) => e.preventDefault());
document.addEventListener("gestureend", (e) => e.preventDefault());

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);