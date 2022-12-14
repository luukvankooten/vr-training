import { Action, Reducer } from "./dispatch";

export type Middleware<T> = (next: Middleware<Readonly<T>>, action: Action<any>, state: Readonly<T>) => Middleware<T>

export default function middleware<T>(middlewares: Middleware<T>[], rootReducer: Reducer<T, any, T>): Reducer<T, any, T> {
  return (state, payload) => {
    let current = middlewares.shift();
    let next = middlewares.shift();

    let reduce = () => rootReducer(state, payload);

    if (current === undefined) {
      return reduce();  
    }

    if (next === undefined) {
      return reduce();
    }

    current(next, payload, state);

    return reduce();
  }
   
}