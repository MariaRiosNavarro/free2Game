import "./RecAdd.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const RecAdd = () => {
  const [newGames, setNewGames] = useState([]);

  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/games?sort_by=release-date";

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
      .then((games) => setNewGames(games.slice(0, 4)))
      .catch((err) => console.error("Fetch Isue", err));
  }, []);

  console.log(newGames);

  return (
    <section className="rec-add-wrapper">
      {newGames ? (
        newGames.map((item) => (
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
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default RecAdd;
