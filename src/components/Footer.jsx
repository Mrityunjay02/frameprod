import React from "react";
import { FaFacebook, FaGithub, FaYoutube, FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  // Styles
  const footerStyle = {
    backgroundColor: "#1E3A8A", // blue shade
    color: "#fff",
    padding: "50px 20px",
    fontFamily: "Arial, sans-serif",
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    margin: 0
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "0 auto 40px auto",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    paddingBottom: "30px",
    maxWidth: '1200px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const colStyle = { flex: "1", minWidth: "200px", margin: "0 20px" };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "15px"
  };

  const paraStyle = { fontSize: "14px", lineHeight: "1.6", color: "#ddd" };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "14px",
    color: "#ddd",
    lineHeight: "2"
  };

  const bottomBar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '0 10px'
  };

  const iconsStyle = {
    display: "flex",
    gap: "15px",
    fontSize: "18px",
    cursor: "pointer"
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* About Us */}
        <div style={colStyle}>
          <h3 style={headingStyle}>About Us</h3>
          <p style={paraStyle}>
            With our collective expertise, we turn ideas into reality. <br />
            Whether you're a startup or an established brand, we're here to
            elevate your online presence and help you achieve your goals.
          </p>
        </div>

        {/* Useful Links */}
        <div style={colStyle}>
          <h3 style={headingStyle}>Useful Links</h3>
          <ul style={listStyle}>
            <li>About</li>
            <li>Services</li>
            <li>Team</li>
            <li>Prices</li>
          </ul>
        </div>

        {/* Help */}
        <div style={colStyle}>
          <h3 style={headingStyle}>Help</h3>
          <ul style={listStyle}>
            <li>Customer Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div style={colStyle}>
          <h3 style={headingStyle}>Connect With Us</h3>
          <p style={paraStyle}>
            204 2nd Floor, Paras Mall,<br />
            Old, Purani Motihari Rd,<br />
            Jaiprakash Nagar,<br />
            Muzaffarpur, Bihar 843108
          </p>
          <p style={paraStyle}>+91 72949 62001
          </p>
          <p style={paraStyle}>framedigital.solutions@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={bottomBar}>
        <p>Copyright 2024 © Frame Digital solutions Pvt Ltd.</p>
        <div style={iconsStyle}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaFacebook /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaGithub /></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaXTwitter /></a>

          <a href="https://google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaGoogle /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
