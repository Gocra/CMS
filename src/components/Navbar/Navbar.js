import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">CMS</div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="">Docs</a>
          <a href="">Themes</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="account">
          <a href="" className="btn-login">
            Login
          </a>
          <a href="" className="btn-start">
            Start Free Trial
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
