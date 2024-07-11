import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { Auth } from "./firebase";

export const doCreateWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
};

export const doSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(Auth, provider);
};

export const doSignOut = () => {
    return signOut(Auth);
};
