import { combineReducers } from "redux";
import state from "./counterReducer";

const rootReducer = combineReducers(state);

export default rootReducer;