import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAaDIDfDfk99KKOJgg4jsY23ggwfRaO934",
  authDomain: "graduationproject-9f8bf.firebaseapp.com",
  projectId: "graduationproject-9f8bf",
  storageBucket: "graduationproject-9f8bf.appspot.com",
  messagingSenderId: "38611080781",
  appId: "1:38611080781:web:0e2591bd3f38bdf366ae04",
  measurementId: "G-XPRC59D9Q8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
