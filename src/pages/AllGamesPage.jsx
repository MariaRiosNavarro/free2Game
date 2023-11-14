import { useState } from "react";
import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";

const AllGamesPage = ({ newGames }) => {
  const [filteredGames, setGames] = useState(newGames);

  return (
    <div>
      <h2>AllGamesPage</h2>
      <Category setGames={setGames} />
      <Gallery newGames={filteredGames} />
    </div>
  );
};

export default AllGamesPage;
