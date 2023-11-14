import TopPC from "../components/TopPC/TopPC";
import Button from "../components/Button/Button";
import "./HomePage.css";
import HomeSlider from "../components/HomeSlider/HomeSlider.jsx";
import HeaderRandomPicture from "../components/HeaderRandomPicture/HeaderRandomPicture.jsx";

const HomePage = ({ newGames }) => {
  return (
    <div className="home-page">
      <HeaderRandomPicture
        newGames={newGames}
        titelPage="Find & track the best free-to-play games!"
      />
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
