import { Listener } from "./subscriber";

export type Action<T extends string> = { action: T, payload: any | undefined }

export type Reducer<T, A extends string, R extends T> = (s: T, payload: Action<A>) => R;

export type DispatchFunc = <A extends string>(payload: Action<A>) => Action<A>;

export default function dispatch<T, R extends T>(state: T, rootReducer: Reducer<T, any, R>, listeners: Listener<T>[]) {
  return <A extends string>(payload: Action<A>): Action<A> => {
    new Promise(resolve => {
      const newState = Object.freeze(rootReducer(state, payload));

      Promise.all(listeners.map(async (l) => l(newState))).then(resolve);
    });

    return payload;
  }
}