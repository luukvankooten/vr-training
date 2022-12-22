//The main entry for the application
//This is the starting point for the application
import Screen from "./components/ui/Screen";

import { addActiveScene } from "./actions/scenesActions";
import store, { RootState } from './appStore';
import useEngine from "./context/useEngine";
import { createScene } from "./context/useScene";

import "@babylonjs/loaders/glTF";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(
    new URL('./service-worker.ts', import.meta.url),
    { type: "module" }
  );
}

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

    //Remove the subscriber by readding the subscriber
    //Check the implementation;
    store.subscribe(subscriber);
  };

  store.subscribe(subscriber);
  
  engine.runRenderLoop(() => {
    scene.render();
  });

  window.onresize = () => {
    engine.resize();
  }
}

app();