import React, { createContext, useReducer, ReactNode } from "react";
import { themeReducer, initialState } from "./themeReducer";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
