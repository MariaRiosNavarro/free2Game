import { useState, useEffect } from "react";

const HeaderRandomPicture = ({ newGames, titelPage }) => {
  // Für die foto am header der seite Fetche ich ein detail Card statt eine aus der Liste von Newgames, da die Qualität der einzige Foto in jede object sehr klein und schlecht ist
  const [game, setGame] = useState("");

  useEffect(() => {
    if (newGames.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * newGames.length);
    const oneGame = newGames[randomIndex];
    const idOneRandomGame = oneGame.id;
    console.log(idOneRandomGame);

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idOneRandomGame}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2da045f70dmsh00a6d7151352363p157277jsn3936fc9a63e5",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
      mode: "cors",
    };

    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => setGame(data))
      .catch((error) => {
        console.error("Game Over: Try Again with your Fetch:", error);
      });
  }, [newGames]);

  return (
    <div className="image-title-wrapper">
      <div className="big-image">
        {game.screenshots?.map((item, index) =>
          index === 0 ? (
            <img
              key={item.id}
              src={item.image}
              alt=""
              className="game-preview"
            />
          ) : null
        )}
      </div>
      <h2 className="page-title">{titelPage}</h2>
    </div>
  );
};

export default HeaderRandomPicture;
