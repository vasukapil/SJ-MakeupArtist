import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig ={

    apiKey: "AIzaSyBl90h8_aKac-h5ZHz2jHSiboAr725L2U4",
    authDomain: "festive-reserve-309219.firebaseapp.com",
    projectId: "festive-reserve-309219",
    storageBucket: "festive-reserve-309219.appspot.com",
    messagingSenderId: "550167355611",
    appId: "1:550167355611:web:d0242bca609cad0c142cfe",
    measurementId: "G-FBYWCWNYQY"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);