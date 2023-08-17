import { combineReducers } from "redux";
import authReducer from "./Auth/reducer";

const reducer = () =>
  combineReducers({
    authReducer,
  });

export default reducer;
