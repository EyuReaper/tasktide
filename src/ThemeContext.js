import React, { createContext, useContext, useState, useEffect } from 'react';

// Create ThemeContext
const ThemeContext = createContext();

// Custom hook to use ThemeContext
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// ThemeProvider Component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark'); // Default theme: 'light'

    // Sync theme with localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem('app-theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    // Update localStorage and document body class when theme changes
    useEffect(() => {
        localStorage.setItem('app-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Provide theme and toggle function to children
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Export ThemeProvider and ThemeContext
export { ThemeProvider, ThemeContext };
