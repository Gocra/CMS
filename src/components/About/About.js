import "./About.scss";
import Data from "./AboutData";
import Card from "./Card";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="card-grid">
          {Data.map((item, i) => (
            <Card key={i} {...item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
