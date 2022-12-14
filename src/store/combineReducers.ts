import { Reducer, Action } from "./dispatch";

type Reducers<T extends Object> = {
  [P in keyof T]: Reducer<T[P], any, satisfies T[P] >
}

export default function combineReducers<T extends Object>(reducers: Reducers<T>) {
  return (state: T, payload: Action<any>) => {
    const newState = { ...state };

    for (const [key, value] of Object.entries(reducers)) {
      newState[key] = value(state[key], payload)
    }

    return newState;
  }
}