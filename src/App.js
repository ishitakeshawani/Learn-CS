import { Routes,Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { HomePage, Explore, PlayLists, Login } from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlists" element={<PlayLists />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
