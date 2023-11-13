import "./Button.css";

const Button = ({ href, btnName }) => {
  return (
    <Link to={href}>
      <button className="btn">{btnName}</button>
    </Link>
  );
};

export default Button;
