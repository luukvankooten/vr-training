import store, { RootState } from "../appStore";

type SelectorFunc<T> = (state: RootState) => T

export function useSelector<T>(selector: SelectorFunc<T>) {
  let select = selector(store.getState());

  store.subscribe((s) => {
    select = selector(s);
  });

  return select;
}