import { createContext } from "react";

type AdminProfile = {
    isAdmin: boolean, 
    setIsAdmin: (value:boolean) => void;
}

const ContextAdmin = createContext<AdminProfile>({
    isAdmin: false,
    setIsAdmin: () => {},
})

export default ContextAdmin;