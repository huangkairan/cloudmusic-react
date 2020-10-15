import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as playRecuer } from "../pages/player/store";
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playRecuer,
});
export default cReducer;
