import { FC, useContext, useState } from 'react';
import React from 'react';

const ThemeContext = React.createContext(true); //create ThemeContext

const ThemeContextUpdate = React.createContext(() => { }); //create ThemeContextUpdate

//Enable Custom Context Provider Component
export function useThemeContext() {
    return useContext(ThemeContext);
}

//Enable Custom Context Provider Component
export function useThemeContextUpdate() {
    return useContext(ThemeContextUpdate);
}

//props for ContextProvider children
type Props = {
    children?: React.ReactNode
};

const ContextProvider: FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState(true);

    //toggle theme event handler
    const toggleTheme = () => {
        setTheme((prevTheme) => !prevTheme)
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeContextUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    );
}

export default ContextProvider;