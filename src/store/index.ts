import getState, { GetStateFunc } from "./getState";
import subsriber, { SubscribeFunc } from "./subscriber";
import dispatcher, { DispatchFunc, Reducer } from "./dispatch";
import { Middleware } from "./middleware";


export type Store<T> = {
  subscribe: SubscribeFunc<T>,
  dispatch: DispatchFunc,
  getState: GetStateFunc<T>
}

export default function createStore<T>(reducer: Reducer<T, any, T>, middleware?: Middleware<T, any>): Store<T> {
  const intialState = Object.freeze(reducer(null as T, { action: '@@INITIAL', payload: {} }));

  const [subscribe, listeners] = subsriber<typeof intialState>();

  const store: Store<T> = {
    subscribe,
    dispatch: dispatcher<typeof intialState, T>(intialState, reducer, listeners),
    getState: getState<T>(intialState, subscribe),
  }

  if (middleware !== undefined) {
    const monkeyPatch = store.dispatch;

    store.dispatch = middleware(store)(monkeyPatch);
  }

  return store;
}