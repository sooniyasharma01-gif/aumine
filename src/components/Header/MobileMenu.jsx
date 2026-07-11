export default function MobileMenu({ open, setOpen }) {
  return (
    <div className={`mobile-menu ${open ? "show" : ""}`}>
      <a href="#intro" onClick={() => setOpen(false)}>Intro</a>
      <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
      <a href="#date" onClick={() => setOpen(false)}>Date</a>
    </div>
  );
}