import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSl5ND2b5-TqRqRo0nkzCEJnPWUAcRBKk",
    authDomain: "authresto.firebaseapp.com",
    projectId: "authresto",
    storageBucket: "authresto.appspot.com",
    messagingSenderId: "855230751306",
    appId: "1:855230751306:web:e803430d66df516b2dbcb3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
