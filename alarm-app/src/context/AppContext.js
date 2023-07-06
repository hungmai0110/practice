import React, { createContext, useReducer } from "react";
import showHideReducer from "../reducers/showHideReducer";

export const AppContext = createContext();

const initialState = {
  showEditPopup: false,
  showAddPopup: false,
  todos: []
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(showHideReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
