import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="main">
          <div className="footer-section">
            <div className="content">
              <div className="title">Community</div>
              <div className="footer-list">
                <a>Blog</a>
                <a>Status</a>
                <a>Open Collective</a>
                <a>Documentation</a>
                <a>Twitter</a>
                <a>LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="content">
              <div className="title">Customer Service</div>
              <div className="footer-list">
                <a>Email Support</a>
                <a>Telephone support</a>
                <a>Live Chat</a>
                <a>Report an Issue</a>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="content">
              <div className="title">Company</div>
              <div className="footer-list">
                <a>About</a>
                <a>Contact</a>
                <a>Privacy Policy</a>
                <a>Terms & Condition</a>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="content">
              <div className="title">Made By</div>
              <div className="footer-list">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/Gocra"
                >
                  Gocra
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/Gocra"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>&copy; GCMS 2022, All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
