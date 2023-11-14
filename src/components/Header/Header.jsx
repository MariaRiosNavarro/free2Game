import Aside from "../Aside/Aside";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [newGames, setNewGames] = useState([]);

  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/games?sort_by=release-date";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "80bad1a5dbmshf2f932854360a23p117e26jsn6a9999a6e64f",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
    mode: "cors",
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((games) => setNewGames(games))
      .catch((err) => console.error("Fetch Isue", err));
  }, []);

  return (
    <header>
      <NavBar item={newGames} />
      <Aside />
    </header>
  );
};

export default Header;
