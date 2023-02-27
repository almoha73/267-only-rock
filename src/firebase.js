// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAOSdNzFlWq_e-UtQ6BGBqRtVSBhX-AlrA",
	authDomain: "AIzaSyAOSdNzFlWq_e-UtQ6BGBqRtVSBhX-AlrA",
	projectId: "only-rock-2c114",
	storageBucket: "only-rock-2c114.appspot.com",
	messagingSenderId: "182813702616",
	appId: "1:182813702616:web:ec7e9252b59ce350bbdaad",
	measurementId: "182813702616"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);