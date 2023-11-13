import RecAdd from "../components/RecAdd/RecAdd";
import TopPC from "../components/TopPC/TopPC";
import Button from "../components/Button/Button";

const HomePage = () => {
  return (
    <div>
      <h2>HomePage</h2>
      <RecAdd />
      <Button href="/allgames" btnName="SHOW MORE" />
      <TopPC />
      <Button href="/allgames" btnName="SHOW MORE" />
    </div>
  );
};

export default HomePage;
