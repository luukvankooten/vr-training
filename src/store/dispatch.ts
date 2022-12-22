//Dispatch is the way to update the store
import { GetStateFunc } from "./getState";
import { Listener } from "./subscriber";

export interface Action<T = any> {
  action: T
}

export interface AnyAction extends Action {
  [extraProps: string]: any
}

export type Reducer<T, A extends Action, R extends T> = (s: T, payload: A) => R;

export type DispatchFunc<A extends Action> = (payload: A) => A;

export default function dispatch<T, R extends T>(getState: GetStateFunc<T>, rootReducer: Reducer<T, any, R>, listeners: Listener<T>[]) {
  return <A extends Action<any>>(payload: A): A => {
    const newState = Object.freeze(rootReducer(getState(), payload));

    listeners.forEach(async (l) => l(newState));

    return payload;
  }
}