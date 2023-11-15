import { useState } from "react";
import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";
import HeaderPicture from "../components/HeaderPicture/HeaderPicture";
import "./AllGamePage.css";
const AllGamesPage = ({ newGames }) => {
  const [filteredGames, setGames] = useState(newGames);

  return (
    <div className="all-page page-style">
      <HeaderPicture titelPage="All Games" imgSrc="/public/img/header2.jpeg" />
      <Category setGames={setGames} />
      <Gallery newGames={filteredGames} />
    </div>
  );
};

export default AllGamesPage;
