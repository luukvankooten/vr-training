import { Store } from ".";
import { Action, DispatchFunc } from "./dispatch";


export type NextFunc = (next: DispatchFunc) => DispatchFunc


export type Middleware<T, A extends string> = (store: Store<T>) => NextFunc

export default function applyMiddleware<T>(...middlewares: Middleware<T, any>[]): Middleware<T, any> {
  return (store) => (next) => {
    const itter = middlewares.map((middleware) => middleware(store)).values();

    const nextAction = (payload: Action<any>): Action<any> => {
      const currentDispatcher: NextFunc = itter.next().value;
      const nextDispatcher: NextFunc = itter.next().value;

      if (currentDispatcher === undefined) {
        return next(payload);
      }

      const calling = callNext()

      if () {

      }

      const newPayload = callNext(payload);

      return nextAction(newPayload);
    }

    return nextAction
  }
}