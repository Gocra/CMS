import "./Card.scss";
import { GiFeather } from "react-icons/gi";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";
import { TfiFiles } from "react-icons/tfi";
import { FaDatabase } from "react-icons/fa";
import { IoGitBranchOutline } from "react-icons/io5";

const iconArray = [
  <BsFillHandThumbsUpFill className="icon" />,
  <GiFeather className="icon" />,
  <FaDatabase className="icon" />,
  <TfiFiles className="icon" />,
  <RiCodeSSlashFill className="icon" />,
  <IoGitBranchOutline className="icon" />,
];

const Card = ({ title, description, i }) => {
  return (
    <article className="about-card">
      <div className="icon-container">{iconArray[i]}</div>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </article>
  );
};

export default Card;
