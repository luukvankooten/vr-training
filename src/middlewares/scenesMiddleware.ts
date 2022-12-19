import Actions from "../actions";
import { addGui3DManager } from "../actions/guiActions";
import { ADD_ACTIVE } from "../actions/scenesActions";
import { RootState } from "../appStore";
import { Middleware } from "../store/middleware";

const scenesMiddleware: Middleware<RootState, Actions> = (store) => (next) => (action) => {
  if (action.action === ADD_ACTIVE) {
    store.dispatch(addGui3DManager(action.payload));
  }

  return next(action);
}


export default scenesMiddleware;