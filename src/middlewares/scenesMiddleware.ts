import { GUI3DManager } from "@babylonjs/gui";
import Actions from "../actions";
import { addGui3DManager } from "../actions/guiActions";
import { ADD_ACTIVE } from "../actions/scenesActions";
import store, { RootState } from "../appStore";
import { Middleware } from "../store/middleware";

export default function onScenesActive(next: Middleware<RootState>, action: Actions, state: RootState) {
  if (action.action === ADD_ACTIVE) {
    store.dispatch(addGui3DManager(new GUI3DManager(action.payload)));
  }

  return next;
}