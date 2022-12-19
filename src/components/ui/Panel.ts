import { Vector3 } from "@babylonjs/core";
import { HolographicButton, PlanePanel } from "@babylonjs/gui";
import { createElement } from "./useGuiManager";

const Panel = (buttons: HolographicButton[]) => createElement(PlanePanel, {
  name: 'panel',
  position: new Vector3(0, 0, 20),
  margin: 0,
  rows: 9,
  columns: 16,
  childeren: buttons,    
});

export default Panel;