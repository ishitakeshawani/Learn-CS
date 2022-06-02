import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, RequireAuth } from "./components";
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
  SingleVideo,
} from "./pages";
import { useAuth } from "./contexts";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/explore"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <Explore />
            </RequireAuth>
          }
        />
        <Route
          path="/playlists"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <PlayLists />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/playlist/:playListId"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <PlayList />
            </RequireAuth>
          }
        />
        <Route
          path="/likedvideos"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <LikedVideos />
            </RequireAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <WatchLater />
            </RequireAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <History />
            </RequireAuth>
          }
        />
        <Route
          path="/video/:videoId"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <SingleVideo />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
