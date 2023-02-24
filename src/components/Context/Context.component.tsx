import { createContext } from "react";

type ThemeContexte = {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ThemeContexte>({
    darkMode: false,
    setDarkMode: () => {},
})

export default Context;