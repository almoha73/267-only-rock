const INITIAL_STATE = {
	musiciens: [],
};

function musiciensReducer(state = INITIAL_STATE, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "LOADMUSICIENS": {
			return {
				...state,
				musiciens: action.payload,
			};
		}
	}
	return state;
}
export default musiciensReducer;

export const getMusiciens = () => (dispatch) => {
	fetch("../data.json")
		.then((response) => response.json())
		.then((data) => {
			dispatch({
				type: "LOADMUSICIENS",
				payload: data?.musiciens,
			});
		});
};
