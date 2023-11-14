import "./Card.css";
import Button from "../Button/Button";
import Pc from "../../assets/img/PC.svg";
import Browser from "../../assets/img/Browser.svg";

const Card = (props) => {
  return (
    <article className="card">
      <div className="img-wrapper">
        <img src={props.item.thumbnail} alt={props.item.title} />
      </div>
      <div className="text-wrapper">
        <h3 className="title">{props.item.title}</h3>
        {props.item.description ? (
          <p className="description">{props.item.short_description}</p>
        ) : null}
        <Button href={`/detail/${props.item.id}`} btnName="READ MORE" />
        <hr className="separation-line" />
        <div className="badge-wrapper">
          <span className="badge badge-img-wrapper">
            <img
              src={props.item.platform === "Web Browser" ? Browser : Pc}
              alt={props.item.title}
            />
            {console.log(props.item.platform)}
          </span>
          <span className="badge bagge-genre">{props.item.genre}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
