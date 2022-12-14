// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAOSdNzFlWq_e-UtQ6BGBqRtVSBhX-AlrA",
	authDomain: "only-rock-2c114.firebaseapp.com",
	projectId: "only-rock-2c114",
	storageBucket: "gs://only-rock-2c114.appspot.com/",
	messagingSenderId: "182813702616",
	appId: "1:182813702616:web:ec7e9252b59ce350bbdaad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
