import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const navigate = useNavigate();

// Update auth state when token changes in localStorage ✅ 
useEffect(() => {
  const updateAuthState = () => {
    setToken(localStorage.getItem("accessToken"));
  };
// Listen for auth changes ✅
  window.addEventListener("authChange", updateAuthState);
  // Cleanup the event listener ✅
  return () => {
    window.removeEventListener("authChange", updateAuthState);
  };
}, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setToken(null); // ✅ Update state immediately after logout
    alert("You have been logged out successfully.");

    // ✅ Notify Navbar to update without refresh
    window.dispatchEvent(new Event("authChange"));

    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">NOTESTAKING</Link>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        
        {token ? (
          <>
            <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
            <li><Link to="/createnotes" onClick={() => setMenuOpen(false)}>Create</Link></li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export { Navbar };
