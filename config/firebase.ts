// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD-9tSrZQ7Q3Q6v6ZzvQ9z1J9z9z1J9z9z",
  authDomain: "personal-website-a9585.firebaseapp.com",
  projectId: "personal-website-a9585",
  storageBucket: "personal-website-a9585.appspot.com",
  messagingSenderId: "193087107317",
  appId: "1:193087107317:web:6abc8af08e73f72fdc15bc",
  measurementId: "G-MGLJTKYNZK"
};


// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const googleProvier = new GoogleAuthProvider()
export const auth  = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)