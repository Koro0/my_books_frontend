import { createContext } from "react";

type ThemeContexte = {
    darkMode: boolean,
    setDarkMode: (value: boolean) => void;
}

const Context = createContext<ThemeContexte>({
    darkMode: false,
    setDarkMode: () => {},
})

export default Context;