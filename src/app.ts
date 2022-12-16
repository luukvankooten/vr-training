import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";

import Screen from "./components/ui/Screen";

import { addActiveScene } from "./actions/scenesActions";
import store, { RootState } from './appStore';
import useEngine from "./context/useEngine";
import { createScene } from "./context/useScene";
import { getActiveScene } from "./selectors/scenesSelector";
import { useSelector } from "./context/useSelector";

function app() {
  // const engine = useEngine();

  const sceneAction = addActiveScene(createScene());

  console.log(store.dispatch(sceneAction));

  store.subscribe(console.log);

  // engine.runRenderLoop(() => {
  //   const state = store.getState(); //Snapshot

  //   if (state.scenes.active === -1) {
  //     return;
  //   }

  //   const scene = getActiveScene(state);

  //   scene.render();

  //   scene.onBeforeRenderObservable.addOnce(() => {
  //     console.log(state)
  //     Screen(144);
  //   });
  // });
}

// function render() {
//   Screen(144)
// }

document.addEventListener('DOMContentLoaded', app, false);