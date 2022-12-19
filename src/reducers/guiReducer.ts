import { GUI3DManager } from "@babylonjs/gui"
import GuiActions, { ADD_GUI_3D_MANAGER } from "../actions/guiActions"

export interface GUIState {
  gui3DManager: GUI3DManager | undefined
}

const initialState: GUIState = {
  gui3DManager: undefined,
}

export default function guiReducer(state: GUIState = initialState, action: GuiActions): GUIState {
  switch (action.action) {
    case ADD_GUI_3D_MANAGER:
      debugger;
      return {
        gui3DManager: action.payload
      };
    default:
      return state;
  }
}