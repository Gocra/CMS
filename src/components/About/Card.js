import "./Card.scss";

const Card = ({ title, description }) => {
  return (
    <article className="about-card">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </article>
  );
};

export default Card;
