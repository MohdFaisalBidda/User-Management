import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7AVIDESsdh2J-XY1YVNSqlS405cNmJTU",
  authDomain: "managementfullstack.firebaseapp.com",
  projectId: "managementfullstack",
  storageBucket: "managementfullstack.appspot.com",
  messagingSenderId: "1228852241",
  appId: "1:1228852241:web:47897cae7d4dec037df5b0",
  measurementId: "G-2JVE2J5PSB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);