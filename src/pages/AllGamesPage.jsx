import { useState } from "react";
import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";
import HeaderPicture from "../components/HeaderPicture/HeaderPicture";
import "./AllGamePage.css";
import Shiggy from "../assets/img/shiggy.gif";
const AllGamesPage = ({ newGames }) => {
  const [filteredGames, setGames] = useState(newGames);

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1800);

  return (
    <div className="all-page page-style">
      <HeaderPicture titelPage="All Games" imgSrc="/img/header2.jpeg" />
      {loading ? (
        <div style={{ width: "fit-content", margin: "0 auto" }}>
          <img src={Shiggy} alt="" />
        </div>
      ) : (
        <>
          <Category setGames={setGames} />
          <Gallery newGames={filteredGames} />
        </>
      )}
    </div>
  );
};

export default AllGamesPage;
