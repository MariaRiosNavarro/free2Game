import TopPC from "../components/TopPC/TopPC";
import Button from "../components/Button/Button";
import "./HomePage.css";

import HomeSlider from "../components/HomeSlider/HomeSlider";

const HomePage = () => {
  return (
    <div className="home-page">
      <h3>Recently Added</h3>
      <HomeSlider apiUrlEnd="sort_by=popularity" />
      <Button href="/recently" btnName="SHOW MORE" />
      <h3>Top 4 Games in November 2023</h3>
      <TopPC />
      <Button href="/allgames" btnName="SHOW MORE" />
      <h3>Top 4 Games for Browser in November 2023</h3>
      <HomeSlider apiUrlEnd="platform=browser&sort-by=release-date" />
    </div>
  );
};

export default HomePage;
