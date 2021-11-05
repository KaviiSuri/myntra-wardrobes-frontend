import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADrnI3VDMG3Q5ofw4Xkpq_aaP4r1EU8HY",
  authDomain: "myntra-wardrobe.firebaseapp.com",
  projectId: "myntra-wardrobe",
  storageBucket: "myntra-wardrobe.appspot.com",
  messagingSenderId: "230057049353",
  appId: "1:230057049353:web:7b89370ff8230fcb97e7d8",
  measurementId: "G-R5HHXEY6S7",
};

export const firebaseApp = initializeApp(firebaseConfig);
