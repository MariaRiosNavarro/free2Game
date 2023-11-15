import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";
import HeaderRandomPicture from "../components/HeaderPicture/HeaderPicture";

const RecentlyPage = ({ newGames }) => {
  const copyArray = [...newGames];

  copyArray.sort((a, b) => {
    let dateA = new Date(a.release_date);
    let dateB = new Date(b.release_date);
    return dateB - dateA;
  });

  console.log(copyArray);

  return (
    <div className="page-style">
      <HeaderRandomPicture
        titelPage="Recently Add"
        imgSrc="/public/img/header3.jpeg"
      />
      <Gallery newGames={copyArray} />
    </div>
  );
};

export default RecentlyPage;
