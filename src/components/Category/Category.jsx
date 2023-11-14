import React, { useState } from "react";
import "./Category.css";

const Category = ({ genres }) => {
  const [isOpenPlatform, setIsOpenPlatform] = useState(false);
  const [isOpenGenre, setIsOpenGenre] = useState(false);
  const [isOpenSortBy, setIsOpenSortBy] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("PLATFORM");
  const [selectedGenre, setSelectedGenre] = useState("GENRE/TAG");
  const [sortBy, setSortBy] = useState("SORT BY");

  // Zustand, um die ausgewählten Optionen zu speichern
  const [selectedFilters, setSelectedFilters] = useState({
    platform: [],
    genre: [],
    sortBy: [],
  });

  const toggleMenuPlatform = () => {
    setIsOpenPlatform(!isOpenPlatform);
  };

  const toggleMenuGenre = () => {
    setIsOpenGenre(!isOpenGenre);
  };

  const toggleSortBy = () => {
    setIsOpenSortBy(!isOpenSortBy);
  };

  const handleCheckboxChange = (category, value) => {
    // Kopiere das aktuelle ausgewählte Filterset
    const newSelectedFilters = { ...selectedFilters };

    // Überprüfe, ob der Wert bereits ausgewählt ist
    const index = newSelectedFilters[category].indexOf(value);

    if (index !== -1) {
      // Wenn ausgewählt, entferne den Wert
      newSelectedFilters[category].splice(index, 1);
    } else {
      // Wenn nicht ausgewählt, füge den Wert hinzu
      newSelectedFilters[category].push(value);
    }

    // Aktualisiere den Zustand mit den neuen ausgewählten Filtern
    setSelectedFilters(newSelectedFilters);
    console.log("Selected Filters:", selectedFilters);
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
              <input
                type="checkbox"
                value="allPlatforms"
                name="allPlatforms"
                id="allPlatforms"
                onChange={() =>
                  handleCheckboxChange("platform", "allPlatforms")
                }
              />
              <label htmlFor="allPlatforms">all Platforms</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="windows"
                name="windows"
                id="windows"
                onChange={() => handleCheckboxChange("platform", "windows")}
              />
              <label htmlFor="windows">Windows</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="browser"
                name="browser"
                id="browser"
                onChange={() => handleCheckboxChange("platform", "browser")}
              />
              <label htmlFor="browser">Browser</label>
            </div>
          </form>
        )}
        <div>
          {" "}
          {selectedFilters.platform.length === 0
            ? "Platforms"
            : selectedFilters.platform.join(", ")}
        </div>
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
              <input
                type="checkbox"
                value="shooter"
                name="shooter"
                id="shooter"
                onChange={() => handleCheckboxChange("genre", "shooter")}
              />
              <label htmlFor="shooter">shooter</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="sci-fi"
                name="sci-fi"
                id="sci-fi"
                onChange={() => handleCheckboxChange("genre", "sci-fi")}
              />
              <label htmlFor="sci-fi">sci-fi</label>
            </div>
          </form>
        )}
        <div>
          {selectedFilters.genre.length === 0
            ? "Genre"
            : selectedFilters.genre.join(", ")}
        </div>
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
              <input
                type="checkbox"
                name="relevance"
                id="relevance"
                onChange={() => handleCheckboxChange("sortBy", "relevance")}
              />
              <label htmlFor="relevance">Relevance</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="popularity"
                id="popularity"
                onChange={() => handleCheckboxChange("sortBy", "popularity")}
              />
              <label htmlFor="popularity">Popularity</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="releaseDate"
                id="releaseDate"
                onChange={() => handleCheckboxChange("sortBy", "releaseDate")}
              />
              <label htmlFor="releaseDate">Release Date</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="alphabetical"
                id="alphabetical"
                onChange={() => handleCheckboxChange("sortBy", "alphabetical")}
              />
              <label htmlFor="alphabetical">Alphabetical</label>
            </div>
          </form>
        )}
        <div>
          {selectedFilters.sortBy.length === 0
            ? "SortBy"
            : selectedFilters.sortBy.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default Category;
