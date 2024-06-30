// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkkZ8Ygiq5JrcDDAz_pdpHcozJYXgDLiA",
  authDomain: "netflixgpt-cfda5.firebaseapp.com",
  projectId: "netflixgpt-cfda5",
  storageBucket: "netflixgpt-cfda5.appspot.com",
  messagingSenderId: "918916992670",
  appId: "1:918916992670:web:b864977ed5a68e376b758f",
  measurementId: "G-K6D48VHEQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();