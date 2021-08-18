import { combineReducers } from "redux";
import gifReducer from "./gif/gifReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
  gif: gifReducer,
  searchResults: searchReducer
});

export default rootReducer;
