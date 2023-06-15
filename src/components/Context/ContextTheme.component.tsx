import { createContext } from "react";

type ThemeContexte = {
    darkMode: boolean,
    setDarkMode: (value: boolean) => void;
}

const ContextForTheme = createContext<ThemeContexte>({
    darkMode: false,
    setDarkMode: () => {},
})

export default ContextForTheme;