import { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./HomeSlider.css";

const HomeSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleGames, setVisibleGames] = useState([]);

  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/games?sort_by=popularity";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "80caff7fbemshc112244508e4c65p1241abjsnd55fb8f398b4",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((games) => setVisibleGames(games.slice(0, 20)))
      .catch((err) => console.error("Fetch Isue", err));
  }, []);

  const visibleGamesSubset = [...visibleGames].slice(
    startIndex,
    startIndex + 4
  );

  const handleShowMoreClick = () => {
    setStartIndex(startIndex + 1);
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-content">
        {visibleGamesSubset.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            description={true}
            short_description={item.short_description}
            platform={item.platform}
            genre={item.genre}
            id={item.id}
          />
        ))}
      </div>
      <button className="slider-button" onClick={handleShowMoreClick}>
        ✚
      </button>
    </div>
  );
};

export default HomeSlider;
