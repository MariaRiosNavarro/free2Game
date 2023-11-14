import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";

const AllGamesPage = ({ newGames }) => {
  return (
    <div>
      <h2>AllGamesPage</h2>
      <Category newGames={newGames} />
      <Gallery newGames={newGames} />
    </div>
  );
};

export default AllGamesPage;
