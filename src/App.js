import { Route, Routes } from "react-router-dom";

import Search from "./pages/Search";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Inspiration from "./pages/Inspiration";
import Rick from "./pages/Rick";
import Morty from "./pages/Morty";
import Alien from "./pages/Alien";
import Welcome from "./pages/Welcome";
import Wasp from "./pages/Wasp";
import Jerry from "./pages/Jerry";
import EpisodeSearch from "./pages/EpisodeSearch";
function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Inspiration" element={<Inspiration />} />
        <Route path="/Rick" element={<Rick />} />
        <Route path="/Morty" element={<Morty />} />
        <Route path="/Alien" element={<Alien />} />
        <Route path="/Wasp" element={<Wasp />} />
        <Route path="/Jerry" element={<Jerry />} />
        <Route path="/EpisodeSearch" element={<EpisodeSearch />} />
      </Routes>
      <Footer />
    </div>
  );
}

// colon on line 15 represents the params creating a property for the object

export default App;
