// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.local.env.API_KEY_SECRET,
  authDomain: process.local.env.AUTH_DOMAIN_SECRET,
  databaseURL: process.local.env.DB_URL_SECRET,
  projectId: process.local.env.PROJECT_ID_SECRET,
  storageBucket: process.local.env.STORAGE_BUCKET_SECRET,
  messagingSenderId: process.local.env.SENDER_ID_SECRET,
  appId: process.local.env.APP_ID_SECRET,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app)

export { database }
