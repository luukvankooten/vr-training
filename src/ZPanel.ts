import { Vector3 } from "@babylonjs/core";
import { Control3D, VolumeBasedPanel } from "@babylonjs/gui";

export default class ZPanel extends VolumeBasedPanel {

  constructor(name?: string) {
    super(name);  
  }

  protected _mapGridNode(control: Control3D, nodePosition: Vector3): void {
    console.log(control, nodePosition)
    debugger;
  }

}