import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-wZP6z95jCfBfNcxnEYt-i7snP4rNioM",
  authDomain: "react-chococross.firebaseapp.com",
  projectId: "react-chococross",
  storageBucket: "react-chococross.appspot.com",
  messagingSenderId: "983120768998",
  appId: "1:983120768998:web:4c8d13ece36f6dec063027",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
