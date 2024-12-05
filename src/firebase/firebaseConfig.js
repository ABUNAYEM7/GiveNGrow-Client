import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAbNB_rAU0jgZvErKKinDDhyYA3DbJZL58",
  authDomain: "give-n-grow.firebaseapp.com",
  projectId: "give-n-grow",
  storageBucket: "give-n-grow.firebasestorage.app",
  messagingSenderId: "979195091843",
  appId: "1:979195091843:web:2862e35d4f57d39a7474b6"
};


const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)

export default Auth