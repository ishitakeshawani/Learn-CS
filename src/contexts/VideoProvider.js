import axios from "axios";
import { useReducer, useEffect, useContext, createContext, React } from "react";
import { videoReducer } from "../reducers";

const videoContext = createContext();

function VideoProvider({ children }) {
  const initialState = {
    videos: [],
    categories: [],
    selectedCategory: "All",
  };
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { videos },
        } = await axios.get("/api/videos");

        videoDispatch({ type: "INITIALIZE_VIDEOS", payload: videos });

        const {
          data: { categories },
        } = await axios.get("/api/categories");

        videoDispatch({ type: "INITIALIZE_CATEGORIES", payload: categories });
      } catch (error) {
        console.log(error);
      }
    })();
    fetch();
  }, []);

  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);

  return (
    <videoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </videoContext.Provider>
  );
}

const useVideo = () => useContext(videoContext);

export { useVideo, VideoProvider };
