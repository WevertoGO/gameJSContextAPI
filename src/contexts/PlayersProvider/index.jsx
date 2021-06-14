import { useReducer } from "react";
import { PlayersContext } from "./context";
import { data } from "./data";
import { reducer } from "./reducer";

export const PlayersProvider = ({ children }) => {
  const [playersState, playersDispatch] = useReducer(reducer, data);

  return (
    <PlayersContext.Provider value={{ playersState, playersDispatch }}>
      {children}
    </PlayersContext.Provider>
  );
};
