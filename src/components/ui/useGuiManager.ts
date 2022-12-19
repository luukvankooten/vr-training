import { Container3D, Control, Control3D } from "@babylonjs/gui";
import { get3DManager } from "../../selectors/guiSelector";
import { useSelector } from "../../context/useSelector";

type ControlNonFunctionPropertyNames<T extends | Control3D | Control> = Partial<{ [K in keyof T]: T[K] extends Function ? never : T[K] } & { childeren?: T extends Container3D ? Control3D[] : never } & { builder: (control: T) => void }>;

export function createElement<T extends Control3D | Control>(control: new (name?: string) => T, props: ControlNonFunctionPropertyNames<T>) {
  const cntrl: T = useBuilder(new control(props.name));

  if (cntrl instanceof Container3D) {
    props.childeren?.map(child => cntrl.addControl(child))
  }

  Object.entries(props).forEach((entry) => {
    const key = entry[0] as keyof typeof cntrl;
    const value = entry[1];

    cntrl[key] = value;
  })

  if (props.builder !== undefined) {
    props.builder(cntrl);  
  }

  return cntrl;
}

export function useBuilder<T extends Control3D | Control>(control: T) {
  const manager = use3DManager();
  
  if (control instanceof Control3D) {
    manager.addControl(control);  
  }
  
  return control;
}

export function use3DManager() {
  const manager = useSelector(get3DManager);

  return manager;
}