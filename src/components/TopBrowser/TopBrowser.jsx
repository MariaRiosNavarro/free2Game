import "./TopBrowser.css";

import Card from "../Card/Card";
import { useState, useEffect } from "react";

const TopBrowser = () => {
  const [topBrowser, setTopBrowserGames] = useState([]);

  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&sort-by=release-date";

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
      .then((games) => setTopBrowserGames(games.slice(0, 4))) //Only the 4thy first Results
      .catch((err) => console.error("Fetch Isue", err));
  }, []);

  console.log("hey");

  return (
    <section className="top-browser-wrapper">
      {topBrowser ? (
        topBrowser.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            description={false}
            short_description={item.short_description}
            platform={item.platform}
            genre={item.genre}
            id={item.id}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default TopBrowser;
