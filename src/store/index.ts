import getState from "./getState";
import subsriber from "./subscriber";
import dispatch, { Reducer } from "./dispatch";

export default function createStore(reducer: Reducer<{}, any>) {
  const intialState = Object.freeze(reducer({}, { action: '@@INITIAL', payload: {} }));

  const [subscribe, listeners] = subsriber<typeof intialState>();
  
  return {
    subscribe,
    dispatch: dispatch<typeof intialState>(intialState, reducer, listeners),
    getState: getState<typeof intialState>(intialState, subscribe),
  }
}