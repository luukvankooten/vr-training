import { Scene } from "@babylonjs/core";
import useEngine from "./useEngine";

const createScene = (() => {
  const engine = useEngine();

  const scene = new Scene(engine);
  scene.createDefaultCameraOrLight(true, true, true);

  scene.debugLayer.show();

  engine.runRenderLoop(() => {
    scene.render();
  })

  return (): Scene => scene
})();

export default function useScene(): Scene {
  return createScene();
}