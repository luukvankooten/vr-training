import { Store } from ".";
import { Action, DispatchFunc } from "./dispatch";

export type Middleware<T, A extends string> = (store: Store<T>) => (next: DispatchFunc) => (action: Action<A>) => Action<A>

export default function applyMiddleware<T>(...middlewares: Middleware<T, any>[]): Middleware<T, any> {
  return (store) => (next) => {
    const apply = middlewares.map((middleware) => middleware(store)(next));

    const itter = apply.values();

    const nextAction = (payload: Action<any>): Action<any> => {
      const callNext = itter.next().value;

      if (callNext === undefined) {
        return next(payload);
      }

      const newPayload = callNext(payload);

      return nextAction(newPayload);
    }

    return nextAction
  }
}