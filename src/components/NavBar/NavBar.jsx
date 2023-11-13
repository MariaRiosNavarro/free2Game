import Logo from "../../assets/img/Logo.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <img src={Logo} alt="" />
      </Link>

      <input type="text" />
    </nav>
  );
};

export default NavBar;
