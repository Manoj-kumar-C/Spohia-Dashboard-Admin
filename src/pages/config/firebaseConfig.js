// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj2ZbPsNaFY0fV_BvG8FXI20WOSj1HAec",
  authDomain: "video-ap-3e5fe.firebaseapp.com",
  projectId: "video-ap-3e5fe",
  storageBucket: "video-ap-3e5fe.appspot.com",
  messagingSenderId: "9675704832",
  appId: "1:9675704832:web:ffc7a76d944fc78584e6e5",
  measurementId: "G-WNDPESZV29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import React from 'react'

const page = () => {
  return (
    <div>Simple Dubbmy Page</div>
  )
}

export default page
