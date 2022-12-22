//The selectors to get the right information out of the store.
import { RootState } from "../appStore";

export function getActiveScene(store: RootState) {
  const active = store.scenes.active;

  const scene = store.scenes.scenes.at(active);

  if (scene === undefined) {
    throw "No active scene, add a active scene in the store";
  }

  return scene;
}