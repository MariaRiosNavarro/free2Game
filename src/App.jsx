import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllGamesPage from "./pages/AllGamesPage";
import RecentlyPage from "./pages/RecentlyPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/allgames" element={<AllGamesPage />}></Route>
          <Route path="/recently" element={<RecentlyPage />}></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
