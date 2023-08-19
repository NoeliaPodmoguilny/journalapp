// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK5HjllLFP9T6wndfSZ7atebxJ5-LiU8E",
    authDomain: "react-journalapp-8c4a4.firebaseapp.com",
    projectId: "react-journalapp-8c4a4",
    storageBucket: "react-journalapp-8c4a4.appspot.com",
    messagingSenderId: "773432781648",
    appId: "1:773432781648:web:247c838601173c872b9a55"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);