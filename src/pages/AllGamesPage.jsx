import { useState } from "react";
import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";
import HeaderRandomPicture from "../components/HeaderRandomPicture/HeaderRandomPicture";
import "./AllGamePage.css";
const AllGamesPage = ({ newGames }) => {
  const [filteredGames, setGames] = useState(newGames);

  return (
    <div className="all-page page-style">
      <HeaderRandomPicture newGames={newGames} titelPage="All Games" />
      <Category setGames={setGames} />
      <Gallery newGames={filteredGames} />
    </div>
  );
};

export default AllGamesPage;
