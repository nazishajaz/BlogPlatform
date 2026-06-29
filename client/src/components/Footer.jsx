import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Blog Platform</h3>

        <p>
          Share your ideas, inspire others, and build your writing journey.
        </p>

        <div className="footer-divider"></div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} Blog Platform • Built with React, Node.js,
          Express & MongoDB
        </p>
      </div>
    </footer>
  );
}

export default Footer;