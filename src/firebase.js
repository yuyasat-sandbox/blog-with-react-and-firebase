import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADzbcrl-xFVs4Vq3smXVZSSbRG4sH4aSg",
  authDomain: "blog-with-react-and-fire-ba0bc.firebaseapp.com",
  projectId: "blog-with-react-and-fire-ba0bc",
  storageBucket: "blog-with-react-and-fire-ba0bc.appspot.com",
  messagingSenderId: "867993900814",
  appId: "1:867993900814:web:a941665eb19f963f99295f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };