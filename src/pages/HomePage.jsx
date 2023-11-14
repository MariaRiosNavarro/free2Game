import TopPC from "../components/TopPC/TopPC";
import Button from "../components/Button/Button";
import "./HomePage.css";
import HomeSlider from "../components/HomeSlider/HomeSlider.jsx";

const HomePage = ({ newGames }) => {
  const randomIndex = Math.round(Math.random() * 19);
  console.log(randomIndex);
  return (
    <div className="home-page">
      <div className="image-title-wrapper">
        <div className="big-image">
          {newGames.map((item, index) =>
            index === randomIndex ? (
              <img
                key={item.id}
                src={item.thumbnail}
                alt={item.title}
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
