import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const token = localStorage.getItem("token");
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Blog Platform
        </Link>

        <div className="nav-links">
          <Link
            to="/"
            className={isActive("/") ? "active-link" : ""}
          >
            Home
          </Link>

          {token ? (
            <>
              <Link
                to="/create"
                className={isActive("/create") ? "active-link" : ""}
              >
                Create Post
              </Link>

              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={isActive("/login") ? "active-link" : ""}
              >
                Login
              </Link>

              <Link
                to="/register"
                className={isActive("/register") ? "active-link" : ""}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;