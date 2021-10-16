import React, {createContext, useState} from 'react'
export const Context= createContext()
const Provider = ({children}) =>{
    const [IsSignIn,setIsSignIn]= useState(()=>{
        return window.sessionStorage.getItem('token')
    })
    const value = {
        IsSignIn,
        activateSignIn:(token)=>{
            setIsSignIn(true);
            window.sessionStorage.setItem('token',token);
        },
        logOut:()=>{
            window.sessionStorage.removeItem('token');
            setIsSignIn(false);
        }
    }
    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default {
    Provider,
    Consumer:Context.Consumer
}