// FILE: client/src/pages/Intake.jsx
// PURPOSE: Dynamic service intake page (fully responsive)

import { useParams, Link, useNavigate } from "react-router-dom";
import "./intake.css";

export default function Intake() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // SERVICE DEFINITIONS
  const services = {
    "home-installation": {
      title: "Home Installation",
      desc: "Our Home Installation service provides a complete, end‑to‑end Starlink setup for residential properties. We begin by surveying your home to identify the optimal mounting location with the least obstruction and strongest signal path. The Starlink dish is securely mounted on the roof, wall, or an approved mounting point using weather‑rated hardware and sealed penetrations to ensure long‑term durability.\n\nWe run all required cabling through attics, walls, or crawl spaces using clean routing practices, fire‑safe grommets, and exterior weather‑sealed entry points. Every cable run is anchored, protected, and finished to maintain both performance and aesthetics. Inside the home, we install and position the Starlink router in a central location to maximize Wi‑Fi coverage and minimize dead zones.\n\nFor larger homes or properties with challenging layouts, we configure and integrate Starlink Mesh nodes to extend coverage and create a seamless whole‑home network. The installation includes full dish alignment, obstruction scanning, and signal optimization to ensure the highest possible throughput and stability.\n\nOnce the system is online, we perform speed testing, verify device connectivity, and walk you through the Starlink app, network settings, and best‑practice usage. This is a complete, professional installation designed for reliability, performance, and a clean, finished look throughout your home.",
      image: "/images/home starlink_.jpg"
    },

    "kress-skydome": {
      title: "Kress SkyDome™ Precision Antenna",
      desc: "The Kress SkyDome™ Precision Antenna is a high‑performance, dome‑shielded communication unit engineered for harsh desert, rural, and off‑grid environments. Built with a rugged weather‑sealed radome and mounted on a reinforced steel pole system, the SkyDome™ delivers stable, uninterrupted signal reception even in extreme heat, high winds, and remote locations.\n\nIts compact dome design protects the internal antenna array from dust, sand, and environmental wear, ensuring long‑term reliability with minimal maintenance. A single heavy‑duty down‑cable provides clean power and data routing, making installation simple and field‑ready.\n\nIdeal for satellite communication, telemetry, GPS/GNSS, remote monitoring, and long‑range data links, the Kress SkyDome™ is trusted by installers, field engineers, and remote‑site operators who demand precision, durability, and consistent performance.",
      image: "/images/kress-skydome.jpg"
    },

    "business-installation": {
      title: "Business Installation",
      desc: "Our Business Installation service delivers a complete, professional Starlink deployment tailored for commercial and enterprise environments. We begin with a site assessment to determine optimal dish placement, cable routing paths, and network distribution points. The Starlink dish is mounted using commercial‑grade hardware with weather‑sealed penetrations and secure anchoring suitable for offices, warehouses, retail spaces, and multi‑unit buildings.\n\nWe run and terminate CAT6 or CAT5e Ethernet cabling for workstations, access points, printers, VoIP phones, and network hardware. This includes clean routing through ceilings, conduits, cable trays, and wall drops, with proper labeling and patch‑panel termination for organized rack‑mount integration. Phone line wiring and legacy copper runs can be installed, extended, or migrated into your new network layout as needed.\n\nInside the building, we install and configure the Starlink router or integrate the Starlink connection into an existing business network, firewall, or managed switch. For larger spaces, we deploy additional access points or mesh nodes to ensure full Wi‑Fi coverage across offices, conference rooms, and production areas.\n\nEvery installation includes dish alignment, obstruction scanning, signal optimization, Ethernet certification testing, and verification of all network drops. We finalize the setup with a clean, professional finish and provide a walkthrough of your network layout, equipment, and recommended best practices for long‑term reliability and performance.",
      image: "/images/business.png"
    },

    "rv-setup": {
      title: "RV / Mobile Setup",
      desc: "Our RV / Mobile Setup service provides a complete Starlink installation for RVs, vans, trailers, and off‑grid vehicles. We begin by identifying the best mounting solution for your specific rig—roof‑mounted, rack‑mounted, ladder‑mounted, or a low‑profile removable system. All mounts are secured using weather‑rated hardware, sealed penetrations, and vibration‑resistant fasteners designed for highway travel and off‑road conditions.\n\nWe route the Starlink cable cleanly through the RV using roof glands, wall penetrations, or existing conduit paths, ensuring a watertight seal and a professional interior finish. Inside the vehicle, we install the Starlink router in a central location or integrate it into an existing onboard network, inverter system, or 12V/120V power configuration.\n\nFor advanced setups, we configure mobile routers, cellular failover, and Starlink Mesh nodes to extend Wi‑Fi coverage throughout the RV, including slide‑outs, cabins, and exterior patio areas. We also provide custom wiring for CAT6 Ethernet drops, media centers, workstations, and mobile office builds.\n\nEvery installation includes dish alignment, obstruction scanning, and signal optimization for both stationary and in‑motion use. We verify performance, test all connected devices, and walk you through the Starlink app, power management, and best practices for mobile connectivity. This service is ideal for full‑timers, remote workers, overlanders, and anyone who needs reliable high‑speed internet on the move.",
      image: "/images/rv.png"
    },

    "tesla-charger-installation": {
      title: "Professional Tesla Battery Charger Installation",
      desc: "Our Professional Tesla Battery Charger Installation service delivers a clean, safe, and high‑performance charging setup for your home. We install Tesla Wall Connectors and compatible EV chargers using certified wiring practices, proper breaker sizing, and code‑compliant conduit routing to ensure fast, reliable charging for your Tesla vehicle.\n\nWhether your electrical panel is located in the garage, outside, or across the home, our technicians handle full cable routing through walls, attics, or crawl spaces. Every installation includes load assessment, grounding verification, and a clean, flush‑mounted finish that blends seamlessly with your home.\n\nThis service is ideal for homeowners who want faster charging speeds, safer electrical performance, and a professionally installed system that meets Tesla’s recommended standards. Built for long‑term reliability, future EV expansion, and seamless daily charging convenience.",
      image: "/images/tesla-charger.jpg"
    },

    "cable-routing": {
      title: "Professional Cable Routing Service",
      desc: "Our Professional Cable Routing service delivers clean, secure, and code‑compliant routing of communication and power cables through walls, attics, and crawl spaces. Whether you're installing Starlink, a Tesla charger, a network backbone, or a custom antenna system, we ensure every cable run is optimized for performance, durability, and aesthetics.\n\nWe handle drilling, wall penetration, attic navigation, conduit placement, weather‑sealing, and interior finishing. All routing is performed using proper support hardware, fire‑safe grommets, and moisture‑protected exterior seals to ensure long‑term reliability.\n\nThis service is ideal for homeowners, RV owners, and commercial sites that require clean cable management, hidden routing, and professional‑grade installation. Built for harsh environments, long distances, and complex layouts — your cables stay protected, organized, and ready for high‑performance operation.",
      image: "/images/cable routing.png"
    },

    "fiber-fusion-splicing": {
      title: "Fiber Fusion Splicing & Fiber Installation",
      desc: "Our Fiber Fusion Splicing & Installation service delivers professional‑grade fiber routing, termination, and high‑precision fusion splicing for residential and commercial environments. Whether you're extending a fiber backbone, connecting outbuildings, upgrading a business network, or repairing damaged fiber lines, we provide clean, reliable, and standards‑compliant fiber work.\n\nWe handle full fiber runs through attics, walls, conduits, and outdoor pathways using industry‑grade single‑mode or multi‑mode fiber. Every splice is performed with calibrated fusion equipment to ensure ultra‑low loss, maximum signal integrity, and long‑term durability. We terminate fiber into wall plates, patch panels, enclosures, or direct equipment connections depending on your site requirements.\n\nIdeal for homes, offices, warehouses, data rooms, remote buildings, and commercial sites that require high‑speed, low‑latency connectivity. Our service includes testing, verification, and clean labeling for future maintenance. For customers who need a complete solution, we also offer trenching, conduit installation, and full network integration.",
      image: "/images/fiber-splicing.png"
    },

    "custom-wall-mount-kit": {
      title: "Custom Wall Mount Kit",
      desc: "Our Custom Wall Mount Kit is a heavy‑duty, precision‑engineered mounting solution designed for Starlink dishes, antennas, and communication hardware. Built from reinforced steel with weather‑sealed hardware, this kit provides a stable and long‑lasting mounting point on exterior walls, even in harsh environments.\n\nThe mount is compatible with stucco, brick, siding, and concrete surfaces, and includes all required bolts, anchors, and brackets for a clean, secure installation. Its extended arm design provides optimal clearance for signal reception while keeping the dish safely elevated and away from obstructions.\n\nThis product can be ordered and delivered directly to your home or job site. For customers who prefer a complete turnkey experience, we also offer professional installation, including drilling, structural anchoring, weather‑sealed wall penetration, and clean cable routing.\n\nWhether you're upgrading your Starlink setup or installing a new antenna system, the Custom Wall Mount Kit delivers strength, reliability, and a clean professional finish.",
      image: "/images/custom-wall-mount.jpg"
    },

    "starlink-gen3-kit": {
      title: "Starlink Gen 3 Full Kit",
      desc: "The Starlink Gen 3 Full Kit delivers the next generation of high‑speed, low‑latency satellite internet for homes, businesses, and remote locations. This upgraded system features an enhanced phased‑array antenna, improved thermal performance, and a more powerful Wi‑Fi router designed for larger spaces and demanding connectivity needs.\n\nThe Gen 3 dish offers stronger signal stability in obstructed environments, faster throughput, and improved reliability in extreme heat and cold. The included advanced router provides extended range, seamless device management, and automatic firmware updates for long‑term performance.\n\nYour order includes the complete Starlink Gen 3 hardware package, delivered directly to your home or job site. For customers who prefer a turnkey experience, we also offer professional installation, including mounting, cable routing, alignment, and system activation.\n\nWhether you're upgrading your current Starlink system or connecting a new property, the Gen 3 Full Kit provides unmatched speed, reliability, and next‑generation satellite performance.",
      image: "/images/gen3-standard.jpg"
    }
  };

  const service = services[serviceId];

  // If service doesn't exist → redirect home
  if (!service) {
    navigate("/");
    return null;
  }

  return (
    <div className="intake-page">

      {/* BACK ARROW */}
      <Link to="/services" className="intake-back">← Services</Link>

      {/* HEADER */}
      <div className="intake-header">
        <img src={service.image} alt={service.title} className="intake-hero" />
        <div className="intake-header-text">
          <h1>{service.title}</h1>
          <p>{service.desc}</p>
        </div>
      </div>

      {/* FORM */}
     <form className="intake-form" 
     method="POST"
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
       name="service-intake" 
       action="/confirmation" > 
       <input type="hidden" 
       name="form-name" 
       value="service-intake" /> 
       <p style={{ display: "none" }}> <label> Don’t fill this out if you’re human: <input name="bot-field" /> </label> </p>

        {/* Service info */}
        <input type="hidden" name="serviceId" value={serviceId} />
        <input type="hidden" name="serviceTitle" value={service.title} />

        <label>
          <input type="text" name="name" required placeholder="Full Name" />
        </label>

        <label>
          <input type="tel" name="phone" required placeholder="Phone Number" />
        </label>

        <label>
          <input type="email" name="email" required placeholder="Email Address" />
        </label>

        <label>
          <input type="text" name="address" required placeholder="Service Address" />
        </label>

        <label>
          <input type="date" name="date" required placeholder="Preferred Date" />
        </label>

        <label>
          Additional Notes
          <textarea name="notes" rows="5" placeholder="Describe your setup or issue..."></textarea>
        </label>

        <button type="submit" className="intake-submit">
          Submit Request
        </button>
      </form>

    </div>
  );
}
