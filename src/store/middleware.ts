import { Store } from ".";
import { Action, DispatchFunc } from "./dispatch";

// type Storage = ReturnType<typeof createStore>



export type Middleware<T, A extends string> = (store: Store<T>) => (next: DispatchFunc) => (action: Action<A>) => Action<A> | void

function loop<T>(middlewares: Middleware<T, any>[], stage: <T, R>(thing: T) => R) {
  middlewares.forEach(stage);
}

export default function applyMiddleware<T>(...middlewares: Middleware<T, any>[]): Middleware<T, any> {
  return (store) => (next) => {
    const apply = middlewares.map((middleware) => middleware(store)(next));

    const itter = apply.values();

    const nextAction = (payload: Action<any>): Action<any> | void => {
      if (payload === undefined) {
        return;
      }

      const callNext = itter.next().value;

      if (callNext === undefined) {
        return payload;
      }

      const newPayload = callNext(payload);


      if (newPayload === undefined) {
        return;
      }

      return nextAction(newPayload);
    }

    return nextAction
  }
}