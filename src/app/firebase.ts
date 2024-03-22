import { initializeApp, FirebaseApp } from "firebase/app";

// Your web app's Firebase configuration
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string; // Optional property
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: "chit-chat-52028.firebaseapp.com",
  projectId: "chit-chat-52028",
  storageBucket: "chit-chat-52028.appspot.com",
  messagingSenderId: "557295933629",
  appId: "1:557295933629:web:5a7b3b3c44681c38343fd4",
  measurementId: "G-GRBKGD0RWE" // Optional property
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);
