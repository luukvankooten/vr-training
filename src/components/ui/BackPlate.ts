import { Material } from "@babylonjs/core";
import { HolographicBackplate } from "@babylonjs/gui";
import { createElement } from "./use3Dmanager";

export default function BackPlate() {
  return createElement(HolographicBackplate, {
    name: 'BackPlate',
  });
}