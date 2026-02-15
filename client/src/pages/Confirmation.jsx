// FILE: client/src/pages/Confirmation.jsx

import { Link } from "react-router-dom";
import "./confirmation.css";

export default function Confirmation() {
  return (
    <div className="confirmation-page">
      {/* BACK TO HOME (same pattern as intake/services) */}
      <Link to="/" className="confirmation-back">← Home</Link>

      <main className="confirmation-main">
        <h1>Request received</h1>
        <p>
          Thank you. Your service request has been submitted successfully.
          A coordinator will review your details and contact you to confirm
          scheduling, pricing, and any site requirements.
        </p>

        <div className="confirmation-links">
          <Link to="/services">View more services</Link>
          <Link to="/">Return to homepage</Link>
        </div>
      </main>
    </div>
  );
}
