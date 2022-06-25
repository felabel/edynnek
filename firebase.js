import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBg5siFRHBYwUgh4TriALVZfYJwzQY0PdM",
    authDomain: "eddynek-properties.firebaseapp.com",
    projectId: "eddynek-properties",
    storageBucket: "eddynek-properties.appspot.com",
    messagingSenderId: "237668144210",
    appId: "1:237668144210:web:9f7f9495be15d892befb8b",
    measurementId: "G-FY2WN236SR"
}

// initialize firebase app
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)