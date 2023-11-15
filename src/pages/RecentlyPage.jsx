import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";
import HeaderRandomPicture from "../components/HeaderPicture/HeaderPicture";
import Shiggy from "../assets/img/shiggy.gif";
import { useState } from "react";

const RecentlyPage = ({ newGames }) => {
  const copyArray = [...newGames];

  copyArray.sort((a, b) => {
    let dateA = new Date(a.release_date);
    let dateB = new Date(b.release_date);
    return dateB - dateA;
  });

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1800);

  return (
    <div className="page-style">
      <HeaderRandomPicture
        titelPage="Recently Add"
        imgSrc="/img/header3.jpeg"
      />
      {loading ? (
        <div style={{ width: "fit-content", margin: "0 auto" }}>
          <img src={Shiggy} alt="" />
        </div>
      ) : (
        <>
          <Gallery newGames={copyArray} />
        </>
      )}
    </div>
  );
};

export default RecentlyPage;
