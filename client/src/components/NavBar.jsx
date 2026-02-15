// FILE: client/src/components/NavBar.jsx
// PURPOSE:
//   Premium floating glass navigation bar for ecommerce.
//   Includes Home, Products, Cart, Checkout, Order Success.
//   Works on desktop + mobile drawer.
//   Connected to CartContext for live cart count.

import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING GLASS NAV */}
      <nav style={styles.nav}>
        {/* LOGO / HOME */}
        <div style={styles.logo}>
          <Link to="/" style={styles.logoText}>Starlink Super Store</Link>
        </div>

        {/* DESKTOP LINKS */}
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/cart" style={styles.link}>Cart ({cart.length})</Link>
          <Link to="/checkout" style={styles.checkoutButton}>Checkout</Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <div style={styles.hamburger} onClick={() => setOpen(true)}>
          ☰
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {open && (
        <div style={styles.drawer}>
          <button style={styles.closeButton} onClick={() => setOpen(false)}>
            ✕
          </button>

          <Link to="/" style={styles.drawerLink} onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/products" style={styles.drawerLink} onClick={() => setOpen(false)}>
            Products
          </Link>

          <Link to="/cart" style={styles.drawerLink} onClick={() => setOpen(false)}>
            Cart ({cart.length})
          </Link>

          <Link to="/checkout" style={styles.drawerLink} onClick={() => setOpen(false)}>
            Checkout
          </Link>

          <Link to="/order-success" style={styles.drawerLink} onClick={() => setOpen(false)}>
            Order Success
          </Link>
        </div>
      )}
    </>
  );
}

// ---------------------------
// INLINE STYLES
// ---------------------------
const styles = {
  nav: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    maxWidth: "1100px",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backdropFilter: "blur(12px)",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.25)",
    zIndex: 1000,
  },
  logoText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  checkoutButton: {
    padding: "8px 14px",
    background: "#007bff",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
  },
  hamburger: {
    display: "none",
    fontSize: "26px",
    color: "#fff",
    cursor: "pointer",
  },
  drawer: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "70%",
    height: "100%",
    background: "#111",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    zIndex: 2000,
  },
  closeButton: {
    alignSelf: "flex-end",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "28px",
    cursor: "pointer",
  },
  drawerLink: {
    color: "#fff",
    fontSize: "20px",
    textDecoration: "none",
  },
};
