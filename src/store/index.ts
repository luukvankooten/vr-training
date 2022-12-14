import getState from "./getState";
import subsriber from "./subscriber";
import dispatch, { Reducer } from "./dispatch";
import middleware, { Middleware } from "./middleware";

export default function createStore<T>(reducer: Reducer<T, any, T>, middlewares: Middleware<T>[] = []) {
  const rootReducer = middlewares.length === 0 ? reducer : middleware<T>(middlewares, reducer);

  const intialState = Object.freeze(reducer({} as T, { action: '@@INITIAL', payload: {} }));

  const [subscribe, listeners] = subsriber<typeof intialState>();

  return {
    subscribe,
    dispatch: dispatch<typeof intialState, T>(intialState, rootReducer, listeners),
    getState: getState<T>(intialState, subscribe),
  }
}