import PriceCard from "./PriceCard";
import "./Pricing.scss";
import Data from "./pricingData";

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="price-card-grid">
          {Data.map((card, i) => (
            <PriceCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
