import "./Card.css";
import Button from "../Button/Button";

const Card = () => {
  return (
    <article>
      <div className="img-wrapper">
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className="text-wrapper">
        <h3 className="title">{props.title}</h3>
        {props.description ? (
          <p className="description">{props.short_description}</p>
        ) : null}
      </div>
      <Button href={`/detail/${props.id}`} btnName="READ MORE" />
      <hr className="separation-line" />
      <div className="badge-wrapper">
        <span className="badge">{props.platform}</span>
        <span className="badge">{props.genre}</span>
      </div>
    </article>
  );
};

export default Card;
