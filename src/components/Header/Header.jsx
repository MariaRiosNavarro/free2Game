import Aside from "../Aside/Aside";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <NavBar />
      <Aside />
    </header>
  );
};

export default Header;
