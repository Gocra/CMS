import PriceCard from "./PriceCard";
import "./Pricing.scss";
import Data from "./pricingData";
import { AiOutlineMail } from "react-icons/ai";
import { MdConstruction } from "react-icons/md";

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="price-card-grid">
          {Data.map((card, i) => (
            <PriceCard key={i} {...card} />
          ))}
        </div>
        <div className="info">
          <div className="detail">
            <div className="icon-container">
              <AiOutlineMail size="80px" />
            </div>
            <p>
              <span>
                Our premade plans not fit your needs? <a>Contact us</a> for a
                custom plan that provides everything you need to build and run
                best-in-class customer experiences at scale.
              </span>
            </p>
          </div>
          <div className="detail">
            <div className="icon-container">
              <MdConstruction size="80px" />
            </div>
            <p>
              Let our team of experts build your website. Whether you need a
              landing page or a full ecommerce site, we can build it for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
