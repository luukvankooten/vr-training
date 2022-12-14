import subsribe from "./subscriber";

export default function getState<T>(state: T, subscriber: ReturnType<typeof subsribe<T>>[0]) {
  let newState: Readonly<T> = Object.freeze(state);

  subscriber((s) => {
    newState = Object.freeze(s);
  });

  return () => newState
}