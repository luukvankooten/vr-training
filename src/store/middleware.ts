import { Action, Reducer } from "./dispatch";

export type Middleware<T> = (next: Middleware<Readonly<T>>, action: Action<any>, state: Readonly<T>) => Middleware<T>


function reduce<T>(s: T, action: Action<any>) {

}

export default function middleware<T>(middlewares: Middleware<T>[], rootReducer: Reducer<T, any, T>): Reducer<T, any, T> {
  return (state, payload) => {
    middlewares.reduce(async (previos, current) => {

    });

    return rootReducer(state, payload);
  }
   
}