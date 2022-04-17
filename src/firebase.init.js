// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBjYXFl_YflKBbTCRzTaV01rP_jwWnenY",
    authDomain: "aumi-tuition-care.firebaseapp.com",
    projectId: "aumi-tuition-care",
    storageBucket: "aumi-tuition-care.appspot.com",
    messagingSenderId: "676186733505",
    appId: "1:676186733505:web:afb2edb0d35a55f3780d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;