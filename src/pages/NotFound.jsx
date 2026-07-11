import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <p className="notfound-eyebrow">404</p>
      <h2>Page Not Found</h2>
      <div className="notfound-line"><span /><em>Lost in the moment</em><span /></div>
      <p className="notfound-sub">The page you're looking for doesn't exist — but the rest of the site is just as beautiful.</p>
      <button className="notfound-btn" onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
}
