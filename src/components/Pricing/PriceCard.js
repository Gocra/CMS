import "./PriceCard.scss";
import TickSVG from "../../assets/tick.svg";
import CrossSVG from "../../assets/cross.svg";

const PriceCard = ({ name, price, hasFeatures, notFeatures }) => {
  return (
    <article className={`price-card ${name.toLowerCase()}`}>
      <h1 className="name">{name}</h1>
      <h2 className="price">
        <span className="amount">£{price}</span>/month
      </h2>
      <ul className="feature-list">
        {hasFeatures.map((feature, i) => (
          <li key={i}>
            <img src={TickSVG} alt="" />
            <span>{feature}</span>
          </li>
        ))}
        {notFeatures.map((feature, i) => (
          <li key={i}>
            <img src={CrossSVG} alt="" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="buy">Start Now</button>
    </article>
  );
};

export default PriceCard;
