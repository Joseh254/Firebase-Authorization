
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../../../firebase";
import { useState, useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const authContext = React.createContext();

export function UseAuth(){
    return useContext(authContext)
}
export function Authprovider({children}){
    const [Currentuser,setCurrentUser] = useState(null)
    const [userIsLoggedIn,setUserIsLogedIn]=useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(Auth, initializeUser)
        return unsubscribe;
    },[])

    async function initializeUser(user){
        if(user){
            set({...user})
            setUserIsLogedIn(true)
        }else{
            setCurrentUser(null)
            setUserIsLogedIn(false)
        }
        setLoading(false)
    };
    const value= {
        Currentuser,
        loading,
        userIsLoggedIn
    }
    return (
        <authContext.Provider value = {value}>
            {!loading && children}
        </authContext.Provider>
    )
};