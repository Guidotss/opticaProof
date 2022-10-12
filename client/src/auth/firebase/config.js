
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBtvGMP3HUzWM6dwn1ZyuvMUk7OYYgY624",
  authDomain: "optica-proof.firebaseapp.com",
  projectId: "optica-proof",
  storageBucket: "optica-proof.appspot.com",
  messagingSenderId: "1011081060921",
  appId: "1:1011081060921:web:cf47675f0045cc5f63a3e8"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const fireBaseAuth = getAuth(firebaseApp);
