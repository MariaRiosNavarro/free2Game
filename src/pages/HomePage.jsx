import TopPC from "../components/TopPC/TopPC";
import Button from "../components/Button/Button";
import "./HomePage.css";
import HomeSlider from "../components/HomeSlider/HomeSlider.jsx";
import { useState, useEffect } from "react";

const HomePage = ({ newGames }) => {
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
    <div className="home-page">
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
        <h2 className="page-title">
          Find & track the best free-to-play games!
        </h2>
      </div>
      <h3>Recently Added</h3>
      <HomeSlider apiUrlEnd="sort_by=popularity" description={true} />
      <Button href="/allgames" btnName="SHOW MORE" />
      <h3>Top 4 Games in November 2023</h3>
      <TopPC />
      <Button href="/recently" btnName="SHOW MORE" />
      <h3>Top 4 Games for Browser in November 2023</h3>
      <HomeSlider
        apiUrlEnd="platform=browser&sort-by=release-date"
        description={false}
      />
    </div>
  );
};

export default HomePage;
