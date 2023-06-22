import { createContext } from "react";

type ConnectedUser = {
    isConneted: boolean, 
    setIsConneted: (value:boolean) => void;
}

const ContextConnected = createContext<ConnectedUser>({
    isConneted: false,
    setIsConneted: () => {},
})

export default ContextConnected;