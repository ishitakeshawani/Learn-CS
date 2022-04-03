import axios from "axios";
import {
  useReducer,
  useState,
  useEffect,
  useContext,
  createContext,
  React,
} from "react";
import { playListReducer } from "../reducers";

const PlayListContext = createContext();

const PlayListProvider = ({ children }) => {
  const initialState = {
    playLists: [],
  };
  const [playListState, playListDispatch] = useReducer(
    playListReducer,
    initialState
  );
  return (
    <PlayListContext.Provider value={{ playListState, playListDispatch }}>
      {children}
    </PlayListContext.Provider>
  );
};

const usePlayList = () => useContext(PlayListContext);

export { PlayListProvider, usePlayList };
