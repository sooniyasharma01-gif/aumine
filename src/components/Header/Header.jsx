import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const moreLinks = [
  { to: "/contact",      label: "Contact" },
  { to: "/screening",    label: "Screening" },
  { to: "/faq",          label: "FAQ" },
  { to: "/availability", label: "Availability" },
  { to: "/journal",      label: "Journal" },
  { to: "/wishlist",     label: "Wishlist" },
];

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const close = () => { setOpen(false); setDropdown(false); };

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="logo" onClick={close}>Teena</NavLink>

        <nav className="nav">
          <NavLink to="/intro">Intro</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/rates">Rates</NavLink>
          <NavLink to="/date">Date</NavLink>

          <div className="nav-dropdown" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <span className="nav-more">More ▾</span>
            {dropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-menu-inner">
                  {moreLinks.map((l) => (
                    <NavLink key={l.to} to={l.to} onClick={() => setDropdown(false)}>{l.label}</NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <button className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <div className="mobile-menu-grid">
          <NavLink to="/intro"        onClick={close}>Intro</NavLink>
          <NavLink to="/gallery"      onClick={close}>Gallery</NavLink>
          <NavLink to="/rates"        onClick={close}>Rates</NavLink>
          <NavLink to="/date"         onClick={close}>Date</NavLink>
          <NavLink to="/contact"      onClick={close}>Contact</NavLink>
          <NavLink to="/screening"    onClick={close}>Screening</NavLink>
          <NavLink to="/faq"          onClick={close}>FAQ</NavLink>
          <NavLink to="/availability" onClick={close}>Availability</NavLink>
          <NavLink to="/journal"      onClick={close}>Journal</NavLink>
          <NavLink to="/wishlist"     onClick={close}>Wishlist</NavLink>
        </div>
      </div>
    </header>
  );
}
