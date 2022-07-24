import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDm2TQsgMDnPXZCZuk2wGAOnxQ7LtzPCGE",
  authDomain: "auth-demo-369cd.firebaseapp.com",
  projectId: "auth-demo-369cd",
  storageBucket: "auth-demo-369cd.appspot.com",
  messagingSenderId: "751960061402",
  appId: "1:751960061402:web:469c8823d97e156ecb7ce3",
  measurementId: "G-Z6GL4FXGF9"
};

const app = initializeApp(firebaseConfig);

export {app}