//Selectors to extract the right information out of the store
import { RootState } from "../appStore";

export function get3DManager(state: RootState) {
  const manager = state.gui.gui3DManager;

  if (manager === undefined) {
    throw "no 3d manager in the store, add a gui3DManager in the store";
  }

  return manager;
}