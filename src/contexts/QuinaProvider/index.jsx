import React, { useReducer } from "react";
import { QuinaContext } from "./context";
import { reducer } from "./reducer";
import { data } from "./data";

export const QuinaProvider = ({ children }) => {
  const [quinaState, quinaDispatch] = useReducer(reducer, data);

  return (
    <QuinaContext.Provider value={{ quinaState, quinaDispatch }}>
      {children}
    </QuinaContext.Provider>
  );
};
