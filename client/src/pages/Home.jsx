import { motion } from "framer-motion";
import { useEffect } from "react";
import "./home.css";

export default function Home() {
  useEffect(() => {
    const audio = new Audio("/sounds/space-ambience.mp3");
    audio.volume = 0.25;
    audio.play().catch(() => {});
    return () => audio.pause();
  }, []);

  const servicesImages = [
    "/images/showcase.png",
    "/images/showcase2.jpg",
    "/images/techs.png",
    "/images/customersupport.jpg",
    "/images/rv install.png",
    "/images/guarntee.webp",
    
   
  ];

  const featuredImages = [
    "/images/featuredProductsSection/product1.jpg",
    "/images/featuredProductsSection/dome.png",
    "/images/featuredProductsSection/product3.jpg"
  ];

  return (
    <div className="homepage">

      {/* ⭐ FLOATING SERVICES BUTTON */}
      <a href="/services" className="floating-services-btn">
        Services
      </a>

      {/* HERO — full viewport */}
      <section className="hero">
        <div className="hero-overlay">
          <motion.h1
            className="hero-animated-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            ...connecting you with the st
            <motion.span
              className="star-icon"
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              ★
            </motion.span>
            rs
          </motion.h1>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="home-section categories">
        <h3 className="categories-subheading">Explore Our Offerings</h3>
        <div className="category-columns">
          <div className="category-col">
            <h2>Products</h2>
            <ul>
              <li>Starlink Kits</li>
              <li>Tesla Battery & Powerwall</li>
              <li>Cables & Adapters</li>
              <li>Replacement Parts</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="category-col">
            <h2>Installation</h2>
            <ul>
              <li>Home Installation</li>
              <li>Business Installation</li>
              <li>RV / Mobile Setup</li>
              <li>Roof Mounting</li>
              <li>Cable Routing</li>
            </ul>
          </div>
          <div className="category-col">
            <h2>Support</h2>
            <ul>
              <li>Troubleshooting</li>
              <li>Warranty Help</li>
              <li>Replacement Requests</li>
              <li>Speed Optimization</li>
              <li>Account Assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="home-section services">
        <h2 className="services-subheading">Discover  Our Capabilities</h2>
        <div className="services-content">
          <div className="services-left">
            <h2>Why Choose Us</h2>
            <ul>
              <li>Reliable</li>
              <li>Timely Delivery</li>
              <li>Professional Installers</li>
              <li>Quality Guaranteed</li>
              <li>24/7 Support</li>
            </ul>
          </div>
          <div className="services-right">
            <div className="services-carousel-track">
              {servicesImages.map((src, i) => (
                <div className="services-carousel-slide" key={i}>
                  <img src={src} alt={`slide-${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="home-section trust">
        <div className="trust-container">
          <div className="trust-item">
            <h3>Authorized & Certified</h3>
            <p>We supply genuine Telecom equipment and certified installers to ensure proper setup and reliability.</p>
          </div>
          <div className="trust-item">
            <h3>Fast & Secure Delivery</h3>
            <p>Orders are processed quickly and shipped securely with tracking available for peace of mind.</p>
          </div>
          <div className="trust-item">
            <h3>Reliable Support & Warranty</h3>
            <p>Responsive customer support, warranty assistance, and technical guidance to keep your connection running smoothly.</p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="home-section featured-columns">
        <h3 className="fp-title">Featured  Services & Products</h3>
        <div className="fp-columns">
          {featuredImages.map((src, i) => (
            <div className="fp-col" key={i}>
              <img src={src} alt={`featured-${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h4>Southern-Installers</h4>
            <p>Your trusted source for genuine Telecommunication  equipment, accessories, professional installation and  support.</p>
          </div>
          <div className="footer-col">
            <h4>Store</h4>
            <ul>
              <li><a href="/shop">Shop Products</a></li>
              <li><a href="/installation">Installation Services</a></li>
              <li><a href="/accessories">Accessories</a></li>
              <li><a href="/support">Technical Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="/shipping">Shipping & Delivery</a></li>
              <li><a href="/returns">Returns & Refunds</a></li>
              <li><a href="/warranty">Warranty</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>support@southerninstallers.com</li>
              <li>sales@southerninstallers.com</li>
              <li>+1 (555) 123-4567, 808-900-2020</li>
              <li>Mon–Sat: 9am – 6pm</li>
            </ul>
          </div>
        </div>
         <p className="footer-wrapup">© 2026 SOUTHERN INSTALLERS. All rights reserved.</p>
      </footer>

    </div>
  );
}
