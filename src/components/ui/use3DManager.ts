import { Container3D, Control, Control3D, GUI3DManager } from "@babylonjs/gui";
type ControlNonFunctionPropertyNames<T extends Control3D | Control> = Partial<{ [K in keyof T]: T[K] extends Function ? never : T[K] } & { childeren?: T extends Container3D ? Control3D[] : never } & { builder: (control: T) => void }>;

export function createElement<T extends Control3D | Control>(control: new (name?: string) => T, props: ControlNonFunctionPropertyNames<T>) {
  const cntrl = useBuilder(new control(props.name));

  if (cntrl instanceof Container3D) {
    props.childeren?.map(child => cntrl.addControl(child))
  }

  for (const [key, value] of Object.entries(props)) {
    // if (typeof value === 'object') {
    //   Object.assign(cntrl[key], value);
    //   continue;
    // }

    cntrl[key] = value;
  }

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
  const manager = create3DManager();

  return manager;
}