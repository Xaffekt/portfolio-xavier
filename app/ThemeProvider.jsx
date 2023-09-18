import React from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = React.useState(false);
    const toggleMode = () => {
        setIsDark(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider