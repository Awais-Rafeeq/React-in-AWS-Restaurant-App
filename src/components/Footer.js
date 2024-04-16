import React from 'react';
import './Footer.css'; // Assuming you might also want to add specific styles for the footer

const Footer = () => {
  return (
    <footer className="scene">
      <div className="footer-content">
        <div id="socialmedia">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="https://twitter.com"><img className="icon" src="https://landonhotel.com/images/socialmedia/twitter.png" alt="icon for twitter" /></a></li>
            <li><a href="http://www.facebook.com"><img className="icon" src="https://landonhotel.com/images/socialmedia/facebook.png" alt="icon for facebook" /></a></li>
            <li><a href="http://www.youtube.com"><img className="icon" src="https://landonhotel.com/images/socialmedia/youtube.png" alt="icon for youtube" /></a></li>
            <li><a href="https://www.instagram.com"><img className="icon" src="https://landonhotel.com/images/socialmedia/instagram.png" alt="icon for instagram" /></a></li>
            <li><a href="https://www.linkedin.com"><img className="icon" src="https://landonhotel.com/images/socialmedia/linkedin.png" alt="icon for linkedin" /></a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Phone: +1 123-456-7890</p>
          <p>Email: contact@landonhotel.com</p>
          <p>Address: 123 Dream Rd, Dream City, Neverland</p>
        </div>
        <div className="legal">
          <h3>Legal</h3>
          <ul>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
