import { useState } from "react";
import "./AgeGate.css";

export default function AgeGate({ onEnter }) {
  const [denied, setDenied] = useState(false);

  if (denied) {
    return (
      <div className="age-gate">
        <div className="age-gate-box">
          <p className="age-gate-sorry">This website is for adults only. You must be 18 or older to enter.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="age-gate">
      <div className="age-gate-box">
        <p className="age-gate-eyebrow">Age Verification</p>
        <h2>Are you 18 or older?</h2>
        <p className="age-gate-sub">This website contains adult content intended for mature audiences only. By entering you confirm you are of legal age in your jurisdiction.</p>
        <div className="age-gate-btns">
          <button className="age-gate-yes" onClick={onEnter}>Yes, I am 18+</button>
          <button className="age-gate-no" onClick={() => setDenied(true)}>No, Exit</button>
        </div>
        <p className="age-gate-disclaimer">By entering this site you agree to our terms and confirm you are of legal age.</p>
      </div>
    </div>
  );
}
