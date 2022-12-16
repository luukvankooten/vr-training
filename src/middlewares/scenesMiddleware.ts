import { GUI3DManager } from "@babylonjs/gui";
import Actions from "../actions";
import { addGui3DManager } from "../actions/guiActions";
import { ADD_ACTIVE } from "../actions/scenesActions";
import { RootState } from "../appStore";
import { Middleware } from "../store/middleware";

const scenesMiddleware: Middleware<RootState, Actions['action']> = (store) => (next) => (action) => {
  if (action.action === ADD_ACTIVE) {
    return next(
      addGui3DManager(new GUI3DManager(action.payload))
    );
  }

  return action;
}


export default scenesMiddleware;