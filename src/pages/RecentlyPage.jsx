import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";

const RecentlyPage = ({ newGames }) => {
  const copyArray = [...newGames];

  copyArray.sort((a, b) => {
    let dateA = new Date(a.release_date);
    let dateB = new Date(b.release_date);
    return dateB - dateA;
  });

  console.log(copyArray);

  return (
    <div>
      <h2>Recently</h2>
      <Gallery newGames={copyArray} />
    </div>
  );
};

export default RecentlyPage;
