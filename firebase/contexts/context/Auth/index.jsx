import React, { createContext, useContext, useState, useEffect } from "react";
import { Auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function UseAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, initializeUser);
        return unsubscribe;
    }, []);

    const initializeUser = (user) => {
        if (user) {
           
            setCurrentUser(user);
            setUserIsLoggedIn(true);

        } else {
            setCurrentUser(null);
            setUserIsLoggedIn(false);
        }
        setLoading(false);
        console.log(user);
    };

    const value = {
        currentUser,
        userIsLoggedIn,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
