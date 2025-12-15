// src/context/ThemeContext.jsx
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultContextValue = {
    isDarkMode: true,
    toggleDarkMode: () => {},
};
const ThemeContext = createContext(defaultContextValue);

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const contextValue = {
        isDarkMode,
        toggleDarkMode,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};