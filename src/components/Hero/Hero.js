import "./Hero.scss";

const Hero = () => {
  return (
    <main className="hero" id="home">
      <div className="container">
        <h1 className="title">
          <span className="emphasise">Simple</span> and{" "}
          <span className="emphasise">lightweight</span> flat file CMS
        </h1>
        <p className="description">
          A lightweight and open source Content Management System. Desktop or
          website version, with no cookies. Made and hosted in the UK, powered
          by UK-owned cloud infrastructure.
        </p>
        <div className="bottom">
          <div className="btns">
            <a href="" className="primary">
              Download
            </a>
            <a href="" className="secondary">
              Get Started
            </a>
            <a href="#about" className="secondary">
              Learn More
            </a>
          </div>
          <span>
            or <a href="">upgrade</a> your current version
          </span>
        </div>
      </div>
    </main>
  );
};

export default Hero;
