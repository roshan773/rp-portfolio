import { createContext, useState } from "react";


export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme, settheme] = useState(false);

    const toggleTheme = () => {
        settheme(!theme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}