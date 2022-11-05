import { useState, useEffect } from "react";
//import data from "../data/data.json";
const useApi = () => {
	const [data, setData] = useState(null);

	async function fetchData() {
		const response = await fetch("../data.json");
		const json = await response.json();
		setData(json);
	}

	useEffect(() => {
		fetchData();
	}, []);

	console.log(data);
	return data?.photos;
};

export default useApi;
