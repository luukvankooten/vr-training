import { Vector3 } from "@babylonjs/core";
import { PlanePanel } from "@babylonjs/gui";
import Button from "./button";
import { createElement } from "./use3Dmanager";

const Panel = () => createElement(PlanePanel, {
  name: 'panel',
  position: new Vector3(0, 0, 18),
  margin: 0,
  rows: 9,
  columns: 16,
  childeren: Array.from(new Array(144), (_, i: number) => Button(i)),
});

export default Panel;