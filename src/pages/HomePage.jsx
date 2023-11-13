import RecAdd from "../components/RecAdd/RecAdd";
import TopPC from "../components/TopPC/TopPC";
import Button from "../components/Button/Button";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h3>Recently Added</h3>
      <RecAdd />
      <Button href="/recently" btnName="SHOW MORE" />
      <h3>Top 4 Games in November 2023</h3>
      <TopPC />
      <Button href="/allgames" btnName="SHOW MORE" />
    </div>
  );
};

export default HomePage;
