import Logo from "../../assets/img/Logo.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <input type="text" />
    </nav>
  );
};

export default NavBar;
