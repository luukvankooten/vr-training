import { PointerEventTypes, Scene } from "@babylonjs/core";
import useEngine from "./useEngine";

const createScene = (() => {
  const engine = useEngine();

  const scene = new Scene(engine);
  scene.createDefaultXRExperienceAsync();
  scene.createDefaultCameraOrLight(true, true, true);

  // if (process.env.APP_DEBUG_LAYER || false) {
  //   scene.debugLayer.show();
  // }
  //

  scene.onPointerObservable.add((data, event) => {
    if (data.type === PointerEventTypes.POINTERDOWN) {
      console.log('clicked');
    }
  })
  engine.runRenderLoop(() => {
    scene.render();
  });

  return (): Scene => scene
})();

export default function useScene(): Scene {
  return createScene();
}