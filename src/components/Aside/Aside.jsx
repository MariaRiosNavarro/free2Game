import "./Aside.css";
import BurgerIcon from "../../assets/img/BurgerIcon.svg";
import CloseIcon from "../../assets/img/CloseIcon.svg";
import Games from "../../assets/img/Games.svg";
import Home from "../../assets/img/Home.svg";
import Added from "../../assets/img/Added.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  const [sideBar, showSide] = useState(false);

  const showBar = () => {
    showSide(!sideBar);
  };

  console.log(sideBar);

  return (
    <aside className={sideBar ? "asideWide" : null}>
      <img src={BurgerIcon} onClick={showBar} alt="" />

      <Link to={"/"}>
        <div className="asideIcon">
          <img src={Home} alt="" />
          <p>Home</p>
        </div>
      </Link>

      <div className="asideIcon">
        <img src={Games} alt="" />
        <p>All Games</p>
      </div>
      <div className="asideIcon">
        <img src={Added} alt="" />
        <p>Recently Added</p>
      </div>
    </aside>
  );
};

export default Aside;
