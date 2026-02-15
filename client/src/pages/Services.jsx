// FILE: client/src/pages/Services.jsx
// PURPOSE: Clean service-only page with pricing + responsive cards

import "./services.css";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "home-installation",
      name: "Home Installation",
      description: "Professional Starlink installation for residential homes.",
      image: "/images/home starlink_.jpg",
      priceType: "fixed",
      price: 199
    },
    
{
  id: "kress-skydome",
  name: "Kress SkyDome™ Precision Antenna",
  description: "Rugged dome‑shielded antenna for remote and harsh environments.",
  image: "/images/kres.jpg",
  priceType: "starting",
  price: 499
},


    {
      id: "business-installation",
      name: "Business Installation",
      description: "Reliable communication setup for commercial and enterprise locations.",
      image: "/images/business.png",
      priceType: "starting",
      price: 299
    },
    {
      id: "rv-setup",
      name: "RV / Mobile Setup",
      description: "Mobile Starlink configuration for RVs, vans, and off‑grid travel.",
      image: "/images/rv.png",
      priceType: "fixed",
      price: 249
    },
   {
  id: "tesla-charger-installation",
  name: "Tesla Home Charger Installation",
  description: "Professional installation of Tesla Wall Connectors for fast, safe home charging.",
  image: "/images/tesla-charger.jpg",
  priceType: "starting",
  price: 399
},

   {
  id: "cable-routing",
  name: "Cable Routing",
  description: "Clean, professional routing of communication and power cables through walls and attics.",
  image: "/images/cable routing.png",
  priceType: "starting",
  price: 99
},
{
  id: "fiber-fusion-splicing",
  name: "Fiber Fusion Splicing & Installation",
  description: "Professional fiber running, termination, and fusion splicing for homes and businesses.",
  image: "/images/fiber-splicing.png",
  priceType: "starting",
  price: 249
},

{
  id: "custom-wall-mount-kit",
  name: "Custom Wall Mount Kit",
  description: "Heavy‑duty wall mount kit for Starlink and antenna systems. Delivery available.",
  image: "/images/custom-wall-mount.jpg",
  priceType: "fixed",
  price: 89
},
{
  id: "starlink-gen3-kit",
  name: "Starlink Gen 3 Full Kit",
  description: "Order the complete Starlink Gen 3 system with fast delivery to your home.",
  image: "/images/gen3-standard.jpg",
  priceType: "fixed",
  price: 599
},


  ];

  return (
    <div className="services-page">

      {/* BACK ARROW */}
      <Link to="/" className="back-arrow">← Home</Link>

      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">
        {services.map((s) => (
          <Link to={`/services/${s.id}`} key={s.id} className="service-card">
            <img src={s.image} alt={s.name} />

            <div className="service-card-content">
              <h2>{s.name}</h2>
              <p>{s.description}</p>

              <div className="service-price">
                {s.priceType === "fixed" && <span>${s.price}</span>}
                {s.priceType === "starting" && <span>Starting at ${s.price}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* FOOTER WRAP-UP */}
    <p className="footer-wrapup">© 2026 SOUTHERN INSTALLERS. All rights reserved.</p>
    </div>
  );
 

}
