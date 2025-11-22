import { createContext } from "react";

// ! Need to seperate createContext() since React Fast Refresh treats it as a non component which means in ThemeContext.jsx it should not be included
const ThemeContext = createContext();

export default ThemeContext;
