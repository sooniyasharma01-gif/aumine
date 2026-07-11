import "./NewPages.css";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="np-page privacy-page">
      <div className="np-hero">
        <p className="np-eyebrow">Legal</p>
        <h2>Privacy Policy</h2>
        <div className="np-hero-line"><span /><em>Last updated: April 2025</em><span /></div>
      </div>

      <div className="privacy-body">

        <section>
          <h3>1. Introduction</h3>
          <p>This Privacy Policy explains how this website ("the Site") collects, uses, and protects any information you provide when using the Site. Your privacy is of the utmost importance and this policy outlines our commitment to protecting it.</p>
        </section>

        <section>
          <h3>2. Information We Collect</h3>
          <p>The Site does not collect personal data through forms or accounts. The only data that may be collected includes:</p>
          <ul>
            <li>Anonymous usage data via Google Analytics (page views, session duration, device type)</li>
            <li>Cookie preferences stored locally in your browser</li>
            <li>Any information you voluntarily provide when contacting via WhatsApp or Telegram (handled by those third-party platforms)</li>
          </ul>
        </section>

        <section>
          <h3>3. Cookies</h3>
          <p>This Site uses minimal cookies solely to remember your age verification and cookie consent preference. These are stored locally in your browser and are not transmitted to any server. Google Analytics may set its own cookies — you can opt out via your browser settings.</p>
        </section>

        <section>
          <h3>4. Google Analytics</h3>
          <p>This Site uses Google Analytics to understand how visitors interact with the Site. This data is anonymous and aggregated — no personally identifiable information is collected. You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
        </section>

        <section>
          <h3>5. Third-Party Links</h3>
          <p>This Site contains links to WhatsApp and Telegram. Once you leave this Site, we are not responsible for the privacy practices of those platforms. Please review their respective privacy policies.</p>
        </section>

        <section>
          <h3>6. Data Security</h3>
          <p>Any information shared directly via WhatsApp or Telegram is treated with complete confidentiality. It is never shared with third parties, stored beyond the duration of our communication, or used for any purpose other than arranging a meeting.</p>
        </section>

        <section>
          <h3>7. Age Restriction</h3>
          <p>This Site is strictly for adults aged 18 and over. By entering the Site you confirm you are of legal age in your jurisdiction. If you are under 18, please leave immediately.</p>
        </section>

        <section>
          <h3>8. Your Rights</h3>
          <p>Under Australian Privacy Law (Privacy Act 1988), you have the right to request access to, correction of, or deletion of any personal data held about you. As this Site collects no personal data directly, there is nothing to access or delete. For any concerns, contact via WhatsApp.</p>
        </section>

        <section>
          <h3>9. Changes to This Policy</h3>
          <p>This policy may be updated from time to time. The date at the top of this page reflects the most recent revision. Continued use of the Site constitutes acceptance of any changes.</p>
        </section>

      </div>
    </div>
  );
}
