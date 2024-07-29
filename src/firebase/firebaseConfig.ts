// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAUV5FN0vaaEb1fU82N7FwcZIQL8h3bwOs",
    authDomain: "knoc-knoc-test.firebaseapp.com",
    databaseURL: "https://knoc-knoc-test-default-rtdb.firebaseio.com",
    projectId: "knoc-knoc-test",
    storageBucket: "knoc-knoc-test.appspot.com",
    messagingSenderId: "738443399193",
    appId: "1:738443399193:web:570e29ca675820e3595a88",
    measurementId: "G-RDG1MBPBCG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

let messaging;
if (typeof window !== "undefined") {
    messaging = getMessaging(app);
} else {
    messaging = null;
}

export { app, messaging, provider, auth }