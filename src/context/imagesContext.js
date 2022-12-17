import { createContext } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import uuid from "react-uuid";
export const ImageContext = createContext();

export function ImageContextProvider({ children }) {
	const listRef = ref(storage, "caroussel/");
	const listRef2 = ref(storage, "photos-267/");
	const listRef3 = ref(storage, "musiciens/");
	const listRef4 = ref(storage, "photo-groupe/");
	let slides = [];
	let photos = [];
	let musiciens = [];
	let groupe = [];
	let textGroupe = [];
	function getSlides(arg, array) {
		listAll(arg)
			.then((res) => {
				res.prefixes.forEach((folderRef) => {
					console.log(folderRef);
				});

				res.items.forEach((itemRef) => {
					getDownloadURL(itemRef).then((url) => {
						array.push({ id: uuid(), href: url });
					});
				});
			})
			.catch((error) => {
				console.log(error);
			});
		return array;
	}

	slides = getSlides(listRef, slides);
	photos = getSlides(listRef2, photos);
	musiciens = getSlides(listRef3, musiciens);
	groupe = getSlides(listRef4, groupe);

	const getTextGroupe = async () => {
		const querySnapshot = await getDocs(collection(db, "biographie"));
		querySnapshot.forEach((doc) => {
			console.log(doc.data());
			textGroupe.push({ id: uuid(), text: doc.data().text });
			console.log(textGroupe);
		});
	};
	getTextGroupe();

	const value = {
		slides,
		photos,
		musiciens,
		groupe,
		textGroupe,
	};
	return (
		<ImageContext.Provider value={value}>{children}</ImageContext.Provider>
	);
}
