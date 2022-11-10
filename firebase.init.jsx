
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCyZfJwpewzcbR3Ehukze-_oePO63woJyc",
  authDomain: "fitnesszone-66436.firebaseapp.com",
  projectId: "fitnesszone-66436",
  storageBucket: "fitnesszone-66436.appspot.com",
  messagingSenderId: "918397351005",
  appId: "1:918397351005:web:9fc6039a7c8691eba949b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;