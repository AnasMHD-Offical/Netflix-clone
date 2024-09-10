import { Children, createContext } from "react";
import {auth , db , storage } from "./Firebase"

export const FirebaseContext = createContext(null)

export const FirebaseProvider = ({children}) =>{
    return(
        <FirebaseContext.Provider value={{auth , db , storage}}>
            {children}
        </FirebaseContext.Provider >    
    )
}