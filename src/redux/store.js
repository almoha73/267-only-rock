import {
	legacy_createStore as createStore,
	applyMiddleware,
	combineReducers,
} from "redux";
import slideReducer from "./slide/slideReducer";
import musiciensReducer from "./musiciens/musiciensReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	slideReducer,
	musiciensReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
