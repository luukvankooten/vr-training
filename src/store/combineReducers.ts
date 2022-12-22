//Combine reducers is the way to create different 
import { Action, Reducer } from "./dispatch";

type Reducers<T extends Object> = {
  [P in keyof T]: Reducer<T[P], any, T[P]>
}

export default function combineReducers<T extends {}, R extends T>(reducers: Reducers<T>): Reducer<T, any, R> {
  return (state: T, payload: Action): R => {
    
    const newState: T = { ...state };

    Object.entries(reducers).forEach((entry) => {
      const key = entry[0] as keyof T;
      const value = entry[1] as Reducer<any, any, any>;

      const keyState = newState[key]

      const reduced = value(keyState, payload);

      newState[key] = reduced;
    });

    return newState as R;
  }
}