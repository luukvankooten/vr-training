import { Scene } from "@babylonjs/core";

export const ADD_SCENE = 'SCENES_ADD_SCENE';
export const SET_ACTIVE = 'SCENES_SET_ACTIVE';
export const ADD_ACTIVE = 'SCENES_ADD_ACTIVE';

type AddSceneAction = { action: typeof ADD_SCENE, payload: Scene }

type SetActiveScene = { action: typeof SET_ACTIVE, paload: number };

type AddActiveScene = { action: typeof ADD_ACTIVE, payload: Scene };

type ScenesActions = | AddSceneAction | SetActiveScene | AddActiveScene;


export function addActiveScene(scene: Scene): AddActiveScene {
  return {
    action: ADD_ACTIVE,
    payload: scene,
  }
}


export function setActiveScene(index: number): SetActiveScene {
  return {
    action: SET_ACTIVE,
    paload: index,
  }
}

export function addScene(scene: Scene): AddSceneAction {
  return {
    action: ADD_SCENE,
    payload: scene
  }
}


export default ScenesActions;