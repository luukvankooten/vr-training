import { Store } from ".";
import { Action, DispatchFunc } from "./dispatch";


export type NextFunc<A extends Action> = (next: DispatchFunc<A>) => DispatchFunc<A>

export type Middleware<T, A extends Action> = (store: Store<T, A>) => NextFunc<A>

function end<A extends Action>(next: DispatchFunc<A>): DispatchFunc<A> {
  return (payload) => next(payload);
};

function rootMiddleware<A extends Action>(dispatchers: NextFunc<A>[]): NextFunc<A> {
  return (next: DispatchFunc<A>) => {
    const clone = [...dispatchers];

    const currentDispatch = clone.shift()

    if (currentDispatch === undefined) {
      return end(next)
    }

    return rootMiddleware(clone)(currentDispatch(next))
  }
}

export default function applyMiddleware<T, A extends Action>(...middlewares: Middleware<T, A>[]): Middleware<T, A> {
  return (store) => rootMiddleware(middlewares.map(m => m(store)));
}

