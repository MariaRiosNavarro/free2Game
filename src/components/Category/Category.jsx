import React, { useState } from "react";
import "./Category.css";

const Category = ({ genres }) => {
  const [isOpenPlatform, setIsOpenPlatform] = useState(false);
  const [isOpenGenre, setIsOpenGenre] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("PLATFORM");
  const [selectedGenre, setSelectedGenre] = useState("GENRE/TAG");

  const toggleMenuPlatform = () => {
    setIsOpenPlatform(!isOpenPlatform);
  };

  const toggleMenuGenre = () => {
    setIsOpenGenre(!isOpenGenre);
  };

  return (
    <div>
      <h2>Category</h2>
      <div className="custom-dropdown">
        <div
          className="selected-Platform"
          onClick={toggleMenuPlatform}
          onBlur={() => setIsOpenPlatform(false)}
        >
          {selectedPlatform === "platforms" ? "Platforms" : selectedPlatform}
        </div>
        {isOpenPlatform && (
          <form action="">
            <label htmlFor="windows">Windows</label>
            <input type="checkbox" name="windows" id="windows" />
            <label htmlFor="browser">Browser</label>
            <input type="checkbox" name="browser" id="browser" />
          </form>
        )}
      </div>
      <div className="custom-dropdown">
        <div
          className="selected-Genre"
          onClick={toggleMenuGenre}
          onBlur={() => setIsOpenGenre(false)}
        >
          {selectedGenre === "genre" ? "Genre" : selectedGenre}
        </div>
        {isOpenGenre && (
          <form action="" className="GenreInputs">
            <label htmlFor="shooter">shooter</label>
            <input type="checkbox" name="shooter" id="shooter" />
            <label htmlFor="sci-fi">sci-fi</label>
            <input type="checkbox" name="sci-fi" id="sci-fi" />
          </form>
        )}
      </div>
    </div>
  );
};

export default Category;
