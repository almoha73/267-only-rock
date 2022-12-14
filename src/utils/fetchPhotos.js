import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getMusiciens = async () => {
	try {
		return await getDocs(collection(db, "musiciens"));
	} catch (error) {
		console.log(error);
	}
};

export const getSlides = async () => {
	try {
		return await getDocs(collection(db, "slides-groupe"));
	} catch (error) {
		console.log(error);
	}
};

export const getPhotoGroupe = async () => {
	try {
		return await getDocs(collection(db, "photo-groupe"));
	} catch (error) {
		console.log(error);
	}
};

export const getGallery = async () => {
	try {
		return await getDocs(collection(db, "gallery-photos"));
	} catch (error) {
		console.log(error);
	}
};
