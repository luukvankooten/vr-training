import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";

import Screen from "./components/ui/Screen";

import { addActiveScene } from "./actions/scenesActions";
import store, { RootState } from './appStore';
import useEngine from "./context/useEngine";
import { createScene } from "./context/useScene";
import { getActiveScene } from "./selectors/scenesSelector";
import { useSelector } from "./context/useSelector";
import { addGui3DManager } from "./actions/guiActions";

function app() {
  // const engine = useEngine();

  // store.subscribe(s => {

  //   debugger
  //   try {
  //     const active = getActiveScene(s);

  //     console.log(s);

  //     if (s.gui.gui3DManager === undefined) {
  //       store.dispatch(addGui3DManager(active));  
  //     }
      
  //   } catch (e) {
  //     debugger;
  //     console.error(e);
  //   }

  //   console.log(s);
  // });

  store.subscribe(s => {
    console.log(s);
  })


  const sceneAction = addActiveScene(createScene());

  console.log(store.dispatch(sceneAction));

  console.log('hello')


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