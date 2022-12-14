//Middleware types specified for the app.
import Actions from "../actions";
import { RootState } from "../appStore";
import { Middleware } from "../store/middleware";

export type AppMiddleware = Middleware<RootState, Actions>;