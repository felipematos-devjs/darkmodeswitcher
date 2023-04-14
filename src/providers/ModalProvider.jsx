import { useEffect } from "react";
import { createContext, useContext } from "react";
import { useState } from "react";

const ModalBoxContext = createContext()
export const ModalContextProvider = ({children}) =>{
    const [modalOpened, setModalOpened] = useState(false)

    const value = {
        modalOpened, setModalOpened
    }

    return (
        <ModalBoxContext.Provider value={value}>
            {children}
        </ModalBoxContext.Provider>
        )
}

export const UseModalContext = () => useContext(ModalBoxContext)