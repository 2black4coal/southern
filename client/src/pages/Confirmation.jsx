import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <div className="confirmation-page">
      <h1>Request Submitted</h1>

      <p>
        Thank you. Your service request has been received.
      </p>

      <p>
        Southern Installers will review your request and contact you
        regarding the next steps.
      </p>

      <Link to="/" className="confirmation-home">
        Return Home
      </Link>
    </div>
  );
}
