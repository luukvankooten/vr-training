//Create the actions for Gui 3d managers
import { Scene } from "@babylonjs/core";
import { GUI3DManager } from "@babylonjs/gui";

export const ADD_GUI_3D_MANAGER = 'ADD_GUI_3D_MANAGER';

type AddGui3DManager = { action: typeof ADD_GUI_3D_MANAGER, payload: GUI3DManager }

type GuiActions = | AddGui3DManager;

export function addGui3DManager(scene: Scene): AddGui3DManager {
  return {
    action: ADD_GUI_3D_MANAGER,
    payload: new GUI3DManager(scene)
  }
}

export default GuiActions; 