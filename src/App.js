import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import {
  HomePage,
  Explore,
  PlayLists,
  Login,
  SignUp,
  PlayList,
  LikedVideos,
  WatchLater,
  History,
} from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlists" element={<PlayLists />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/playlist/:playListId" element={<PlayList />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
