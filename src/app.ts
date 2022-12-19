import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";

import Screen from "./components/ui/Screen";

import { addActiveScene } from "./actions/scenesActions";
import store, { RootState } from './appStore';
import useEngine from "./context/useEngine";
import { createScene } from "./context/useScene";


function app() {
  const engine = useEngine();
  let scene = createScene();

  scene.onBeforeRenderObservable.addOnce(() => {
    const sceneAction = addActiveScene(scene);

    store.dispatch(sceneAction);
  });

  let subscriber = (s: RootState) => {
    if (s.gui.gui3DManager === undefined) {
      return;
    }

    scene.onBeforeRenderObservable.addOnce(() => {
      Screen(144);
    });

    //Remove the subscriber by adding
    store.subscribe(subscriber);
  };

  store.subscribe(subscriber);
  
  engine.runRenderLoop(() => {
    scene.render();
  });
}

app();