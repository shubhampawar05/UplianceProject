// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTEwhAPy-mudvOAc1v9jLhd1xBOpJh2ZA",
  authDomain: "upliance-12ac4.firebaseapp.com",
  projectId: "upliance-12ac4",
  storageBucket: "upliance-12ac4.appspot.com",
  messagingSenderId: "642831618645",
  appId: "1:642831618645:web:897cd11175158f17e6badc"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);