import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { Auth } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
export const doCreateWithEmailAndPassword = async(email,password)=>{
    return createUserWithEmailAndPassword
};

export const doSignInWithEmailAndPAssword = (email, password)=>{
    return signInWithEmailAndPassword(Auth,email,password)
};

export const doSignInwithGoogle = async ()=>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithpopup (Auth,provider);
    return result;
};

export const doSignOut = ()=>{
    return Auth.signOut();
};

// export const doPasswordReset = (email)=>{
//     return sendPasswordResetEmail(Auth, email);
// };

// export const doPasswordChange = (password)=>{
//     return updatePassword(Auth.currentUser,password);
// };

// export const doSendEmailVerification =  ()=>{
//     return sendEmailVerification(Auth.currentUser,{
//         url: `${window.location.origin}/home`,
//     });
// };
