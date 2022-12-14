import combineReducers from "../store/combineReducers";
import guiReducer from "./guiReducer";
import scenesReducer from "./scenesReducer";

export default function createCombineReducer() {
  const reducers = {
    scenes: scenesReducer,
    gui: guiReducer
  }
  
  return combineReducers(reducers);
}