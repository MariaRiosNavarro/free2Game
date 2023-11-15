import "./Card.css";
import Button from "../Button/Button";
import Pc from "../../assets/img/PC.svg";
import Browser from "../../assets/img/Browser.svg";
import PCSvg from "../PCSvg/PCSvg";
import BrowserSvg from "../BrowserSVG/BrowserSvg";

const Card = (props) => {
  return (
    <article className="card">
      <div className="img-wrapper">
        <img src={props.item.thumbnail} alt={props.item.title} />
      </div>
      <div className="text-wrapper">
        <h3 className="title">{props.item.title}</h3>
        {props.description ? (
          <p className="description">{props.item.short_description}</p>
        ) : null}
        <Button href={`/detail/${props.item.id}`} btnName="READ MORE" />
        <hr className="separation-line" />
        <div className="badge-wrapper">
          <span className="badge badge-img-wrapper">
            {props.item.platform === "Web Browser" ? <BrowserSvg /> : <PCSvg />}
          </span>
          <span className="badge bagge-genre">{props.item.genre}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
