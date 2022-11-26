import "./Card.scss";

const Card = ({ title, description }) => {
  return (
    <article className="about-card">
      <h2 className="title">{title}</h2>
      <p className="title">{description}</p>
    </article>
  );
};

export default Card;
