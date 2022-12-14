import { Scene } from "@babylonjs/core";
import ScenesActions, { addActiveScene, addScene, ADD_ACTIVE, ADD_SCENE, setActiveScene, SET_ACTIVE } from "../actions/scenesActions";

export interface ScenesState {
  active: number,
  scenes: Scene[],
}

export const initialScenesState: ScenesState = {
  active: -1,
  scenes: [],
}

export default function scenesReducer(state: ScenesState = initialScenesState, action: ScenesActions): ScenesState {
  switch (action.action) {
    case ADD_SCENE: {
      return {
        active: state.active,
        scenes: [...state.scenes, action.payload]
      }
    }
    case SET_ACTIVE: {
      const scenes = state.scenes;

      if (!scenes.at(action.paload)) {
        return state;
      }

      return {
        active: action.paload,
        scenes: state.scenes,
      }
    }
    case ADD_ACTIVE: {
      const newState = scenesReducer(state, addScene(action.payload));

      const index = newState.scenes.indexOf(action.payload);

      return scenesReducer(newState, setActiveScene(index));
    }
    default: {
      return state;
    }
  }
}

