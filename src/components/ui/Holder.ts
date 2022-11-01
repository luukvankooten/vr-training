import { Vector3 } from "@babylonjs/core";
import { HolographicBackplate, PlanePanel } from "@babylonjs/gui";
import { createElement } from "./use3Dmanager";

const Holder = (panel: PlanePanel) => createElement(PlanePanel, {
  name: 'background',
  position: new Vector3(0, 0, 0.05),
  rows: 1,
  columns: 1,
  scaling: new Vector3(16.25, 9.25),
  childeren: [new HolographicBackplate()],
  builder(control) {
    control.linkToTransformNode(panel.node)
  }
});

export default Holder;