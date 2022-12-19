import createGetState, { GetStateFunc } from "./getState";
import subsriber, { SubscribeFunc } from "./subscriber";
import dispatcher, { Action, DispatchFunc, Reducer } from "./dispatch";
import { Middleware } from "./middleware";

export type Store<T, A extends Action> = {
  subscribe: SubscribeFunc<T>,
  dispatch: DispatchFunc<A>,
  getState: GetStateFunc<T>
}

export default function createStore<T, A extends Action>(reducer: Reducer<T, any, T>, middleware?: Middleware<T, any>): Store<T, A> {
  const intialState = Object.freeze(reducer(null as T, { action: '@@INITIAL', payload: {} }));

  const [subscribe, listeners] = subsriber<typeof intialState>();
  const getState = createGetState<T>(intialState, subscribe);

  const store: Store<T, A> = {
    subscribe,
    dispatch: dispatcher<typeof intialState, T>(getState, reducer, listeners),
    getState,
  }

  if (middleware !== undefined) {
    const monkeyPatch = store.dispatch;

    store.dispatch = middleware(store)(monkeyPatch);
  }

  return store;
}