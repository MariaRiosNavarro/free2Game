import "./Aside.css";
import BurgerIcon from "../../assets/img/BurgerIcon.svg";
import CloseIcon from "../../assets/img/CloseIcon.svg";
import Games from "../../assets/img/Games.svg";
import Home from "../../assets/img/Home.svg";
import Added from "../../assets/img/Added.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Aside = () => {
  // # Toggelt die sidebar und dementsprechend die buttons, standardmäßig false
  const [sideBar, showSide] = useState(false);

  const showBar = () => {
    showSide(!sideBar);
  };

  return (
    // ! sideBar ? "true= sidebar erscheint und burgermenü wird zu close button" : " alles umgedreht";
    <aside className={sideBar ? "asideWide" : null}>
      {sideBar ? (
        <img src={CloseIcon} onClick={showBar} alt="" />
      ) : (
        <img src={BurgerIcon} onClick={showBar} alt="" />
      )}

      <NavLink to={"/"}>
        <div className="asideIcon">
          <img src={Home} alt="" />
          {sideBar ? <p>Home</p> : null}
        </div>
      </NavLink>

      <NavLink to={"/allgames"}>
        <div className="asideIcon">
          <img src={Games} alt="" />
          {sideBar ? <p>All Games</p> : null}
        </div>
      </NavLink>

      <NavLink to={"/recently"}>
        <div className="asideIcon">
          <img src={Added} alt="" />
          {sideBar ? <p>Recently Added</p> : null}
        </div>
      </NavLink>
    </aside>
  );
};

export default Aside;
