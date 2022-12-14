import { Action, Reducer } from "./dispatch";

type Reducers<T extends Object> = {
  [P in keyof T]: Reducer<T[P], any, T[P]>
}

export default function combineReducers<T extends {}, R extends T>(reducers: Reducers<T>): Reducer<T, any, R> {
  return (state: T, payload: Action<any>): R => {
    const newState = { ...state } as R;

    const entries = Object.entries<Reducer<any, any, any>>(reducers);

    for (const [key, value] of entries) {
      const oldState = Object.assign(state[key], {});

      newState[key] = { ...oldState, ...value(key, payload) }
    }

    return newState;
  }
}