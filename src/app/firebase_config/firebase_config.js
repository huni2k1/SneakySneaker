import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClpWaioziVB-DP6iaasnt_Y00BfjVtgcE",
  authDomain: "sneaky-sneaker.firebaseapp.com",
  projectId: "sneaky-sneaker",
  storageBucket: "sneaky-sneaker.appspot.com",
  messagingSenderId: "76990413636",
  appId: "1:76990413636:web:24a9c08e98d6409e9db511",
  measurementId: "G-FMMP2LH1X9"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

export default firebaseapp;