import "./Gallery.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [allGameData, setAllGameData] = useState([]);

  useEffect(() => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    // const url = "https://www.freetogame.com/api/games";
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
      .then((data) => setAllGameData(data))
      .catch((error) => {
        console.error("Game Over: Try Again with your Fetch:", error);
      });
  }, []);

  console.log(allGameData);

  return (
    <div>
      <h2>Gallery</h2>
      <section className="galleryContainer">
        {allGameData ? (
          allGameData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              thumbnail={item.thumbnail}
              description={item.description}
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
    </div>
  );
};

export default Gallery;
