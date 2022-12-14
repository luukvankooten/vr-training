import { Listener } from "./subscriber";

export type Action<T extends string> = { action: T, payload: any | undefined }

export type Reducer<T, A extends string, R extends T> = (s: T, payload: Action<A>) => R;

export default function dispatch<T, R extends T>(state: T, rootReducer: Reducer<T, any, R>, listeners: Listener<T>[]) {
  return <A extends string>(payload: Action<A>): R => {
    const newState = Object.freeze(rootReducer(state, payload));

    listeners.forEach(async (l) => l(newState));

    return newState;
  }
}