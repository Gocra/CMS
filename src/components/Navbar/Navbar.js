import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="logo">GCMS</a>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a>Docs</a>
          <a>Themes</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="account">
          <a className="btn-login">Login</a>
          <a className="btn-start">Start Free Trial</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
