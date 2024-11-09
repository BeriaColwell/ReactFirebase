import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7J5j0xqgt65RlWBkZNdl5JTOdsSrn7eY",
  authDomain: "crud-fire-react-bf8e8.firebaseapp.com",
  databaseURL: "https://crud-fire-react-bf8e8-default-rtdb.firebaseio.com",
  projectId: "crud-fire-react-bf8e8",
  storageBucket: "crud-fire-react-bf8e8.firebasestorage.app",
  messagingSenderId: "326933147295",
  appId: "1:326933147295:web:e654c029fb24718bc33caa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)