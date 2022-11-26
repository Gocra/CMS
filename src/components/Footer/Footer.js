import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="main">
          <div className="footer-section">
            <div className="title">Community</div>
            <div className="footer-list">
              <a href="">Blog</a>
              <a href="">Status</a>
              <a href="">Open Collective</a>
              <a href="">Documentation</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
            </div>
          </div>
          <div className="footer-section">
            <div className="title">Customer Service</div>
            <div className="footer-list">
              <a href="">Email Support</a>
              <a href="">Telephone support</a>
              <a href="">Live Chat</a>
              <a href="">Report an Issue</a>
            </div>
          </div>
          <div className="footer-section">
            <div className="title">Company</div>
            <div className="footer-list">
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms & Condition</a>
            </div>
          </div>
          <div className="footer-section">
            <div className="title">Made By</div>
            <div className="footer-list">
              <a href="https://www.github.com/Gocra">Gocra</a>
              <a href="https://www.github.com/Gocra">GitHub</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>&copy; CMS 2022, All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
