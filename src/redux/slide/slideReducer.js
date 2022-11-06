const INITIAL_STATE = {
	slides: [],
};

function slideReducer(state = INITIAL_STATE, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "LOADSLIDES": {
			return {
				...state,
				slides: action.payload,
			};
		}
	}
	return state;
}
export default slideReducer;

export const getSlides = () => (dispatch) => {
	fetch("../data.json")
		.then((response) => response.json())
		.then((data) => {
			dispatch({
				type: "LOADSLIDES",
				payload: data?.slider,
			});
		});
};
