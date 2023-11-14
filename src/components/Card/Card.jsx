import "./Card.css";
import Button from "../Button/Button";
import Pc from "../../assets/img/PC.svg";
import Browser from "../../assets/img/Browser.svg";

const Card = (props) => {
  return (
    <article className="card">
      <div className="img-wrapper">
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className="text-wrapper">
        <h3 className="title">{props.title}</h3>
        {props.description ? (
          <p className="description">{props.short_description}</p>
        ) : null}
        <Button href={`/detail/${props.id}`} btnName="READ MORE" />
        <hr className="separation-line" />
        <div className="badge-wrapper">
          <span className="badge badge-img-wrapper">
            <img
              src={props.platform === "Web Browser" ? Browser : Pc}
              alt={props.title}
            />
          </span>
          <span className="badge bagge-genre">{props.genre}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
