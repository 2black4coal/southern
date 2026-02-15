import { Link } from "react-router-dom";
import "./notfound.css";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <h1>Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist or has moved.</p>
      <Link to="/" className="notfound-btn">
        Back to Home
      </Link>
    </div>
  );
}
