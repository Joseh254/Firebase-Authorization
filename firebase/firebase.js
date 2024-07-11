import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB7PmQepIwaQUz_9H5SRRPBgYBk4O48jg",
  authDomain: "fir-app-2184b.firebaseapp.com",
  projectId: "fir-app-2184b",
  storageBucket: "fir-app-2184b.appspot.com",
  messagingSenderId: "1026098737557",
  appId: "1:1026098737557:web:a08a3ff71dfe5a074cc69c",
  measurementId: "G-XZPJPMQL4W"
};

const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

export { Auth, app };
