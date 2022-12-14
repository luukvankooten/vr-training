import combineReducers from "../store/combineReducers";
import scenesReducer from "./scenes";

export default function createCombineReducer() {
  const reducers = {
    scenes: scenesReducer
  }
  
  return combineReducers(reducers);
}