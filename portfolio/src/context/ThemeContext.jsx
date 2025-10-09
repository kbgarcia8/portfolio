import React, {createContext, useState, useContext1, useContext} from "react";
import PropTypes from 'prop-types';
import { lightTheme, darkTheme } from "styles/theme";
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    console.log(currentTheme)

    const toggleTheme = () => {
        setCurrentTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return(
        <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
            <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useTheme =() => {return useContext(ThemeContext)};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}