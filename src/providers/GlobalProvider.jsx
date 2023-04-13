import { createContext, useContext } from "react";
import { useState } from "react";

const ThemeContext = createContext()

export const GlobalProvider = ({children}) =>{
    const [theme, setTheme] = useState('dark')
    
    const value = {
        theme, setTheme
    }

    return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
    )
}

export const UseThemeContext = () => useContext(ThemeContext)