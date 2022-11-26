import "./About.scss";
import Data from "./AboutData";
import Card from "./Card";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="card-grid">
          {Data.map((item) => (
            <Card {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
