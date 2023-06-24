import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpE2R8eLA_FNIL2V4sLCvLo7n0rDDdqAo",
    authDomain: "chat-app-cb713.firebaseapp.com",
    projectId: "chat-app-cb713",
    storageBucket: "chat-app-cb713.appspot.com",
    messagingSenderId: "822679231912",
    appId: "1:822679231912:web:a0a6cd2f4c0f1185b3519d",
    measurementId: "G-7ZLGR4K0YY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
