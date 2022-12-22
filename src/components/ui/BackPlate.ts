//The backplate e.g. the background of the screen.
import { HolographicBackplate } from "@babylonjs/gui";
import { createElement } from "./useGuiManager";

export default function BackPlate() {
  return createElement(HolographicBackplate, {
    name: 'BackPlate',
  });
}