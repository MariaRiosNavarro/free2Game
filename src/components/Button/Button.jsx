import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ href, btnName }) => {
  return (
    <Link to={href}>
      <button className="btn">{btnName}</button>
    </Link>
  );
};

export default Button;
