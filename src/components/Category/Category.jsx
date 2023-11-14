import React, { useState } from "react";
import "./Category.css";

const Category = ({ genres }) => {
  const [isOpenPlatform, setIsOpenPlatform] = useState(false);
  const [isOpenGenre, setIsOpenGenre] = useState(false);
  const [isOpenSortBy, setIsOpenSortBy] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("PLATFORM");
  const [selectedGenre, setSelectedGenre] = useState("GENRE/TAG");
  const [sortBy, setSortBy] = useState("SORT BY");

  const toggleMenuPlatform = () => {
    setIsOpenPlatform(!isOpenPlatform);
  };

  const toggleMenuGenre = () => {
    setIsOpenGenre(!isOpenGenre);
  };
  const toggleSortBy = () => {
    setIsOpenSortBy(!isOpenSortBy);
  };

  return (
    <div className="categoryContainer">
      <div className="custom-dropdown">
        <div
          className="selected-Platform"
          onClick={toggleMenuPlatform}
          onBlur={() => setIsOpenPlatform(false)}
        >
          {selectedPlatform === "platforms" ? "Platforms" : selectedPlatform}
        </div>
        {isOpenPlatform && (
          <form action="" className="Form">
            <div>
              <input type="checkbox" name="allPlatforms" id="allPlatforms" />
              <label htmlFor="allPlatforms">all Platforms</label>
            </div>
            <div>
              <input type="checkbox" name="windows" id="windows" />
              <label htmlFor="windows">Windows</label>
            </div>
            <div>
              <input type="checkbox" name="browser" id="browser" />
              <label htmlFor="browser">Browser</label>
            </div>
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
          <form action="" className="Form">
            <div>
              <input type="checkbox" name="shooter" id="shooter" />
              <label htmlFor="shooter">shooter</label>
            </div>
            <div>
              <input type="checkbox" name="sci-fi" id="sci-fi" />
              <label htmlFor="sci-fi">sci-fi</label>
            </div>
          </form>
        )}
      </div>
      <div className="custom-dropdown">
        <div
          className="sortBy"
          onClick={toggleSortBy}
          onBlur={() => setIsOpenSortBy(false)}
        >
          {sortBy === "sortby" ? "SortBy" : sortBy}
        </div>
        {isOpenSortBy && (
          <form action="" className="Form">
            <div>
              <input type="checkbox" name="relevance" id="relevance" />
              <label htmlFor="relevance">Relevance</label>
            </div>
            <div>
              <input type="checkbox" name="popularity" id="popularity" />
              <label htmlFor="popularity">Popularity</label>
            </div>
            <div>
              <input type="checkbox" name="releaseDate" id="releaseDate" />
              <label htmlFor="releaseDate">Release Date</label>
            </div>
            <div>
              <input type="checkbox" name="alphabetical" id="alphabetical" />
              <label htmlFor="alphabetical">Alphabetical</label>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Category;
