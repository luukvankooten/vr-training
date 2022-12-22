//Create a scene.
import { Scene } from "@babylonjs/core";
import useEngine from "./useEngine";

export function createScene(): Scene {
  const engine = useEngine();

  const scene = new Scene(engine);

  scene.createDefaultXRExperienceAsync();  

  scene.createDefaultCameraOrLight(true, true, true);

  console.log(process.env.APP_DEBUG_LAYER || false);
  
  // if (process.env.APP_DEBUG_LAYER || false) {
  //   scene.debugLayer.show();
  // }

  return scene;
}