import { SubscribeFunc } from "./subscriber";

export type GetStateFunc<T> = () => Readonly<T>

export default function createGetState<T>(state: T, subscriber: SubscribeFunc<T>): GetStateFunc<T> {
  let newState: Readonly<T> = Object.freeze(state);

  subscriber((s) => {
    newState = s;
  });

  return () => newState
}