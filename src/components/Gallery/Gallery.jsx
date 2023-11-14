import "./Gallery.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";

const Gallery = ({ newGames }) => {
  return (
    <div>
      <h2>Gallery</h2>
      <section className="galleryContainer">
        {newGames ? (
          newGames.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
};

export default Gallery;
