//the actions for the appstore
import GuiActions from "./guiActions";
import ScenesActions from "./scenesActions";

export type Actions = | GuiActions | ScenesActions;

export default Actions;