import "./App.css";
import Banner from "./component/Banner";

import Header from "./component/Header";
import "./sass/main.css";
import { Routes, Route } from "react-router-dom";
import Favourite from "./component/Favourite";
import SingleMovies from "./component/SingleMovies";
import Playlist from "./component/Playlist";
import HomeSlider from "./component/features/HomeSlider";
import Login from "./component/Auth/Login";
import Signin from "./component/Auth/Signin";

function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "2rem" }}>
        <Routes>
          <Route exact path="/" element={<Banner />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/trending" element={<HomeSlider />} />
          <Route path="/movie" element={<SingleMovies />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/register" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
