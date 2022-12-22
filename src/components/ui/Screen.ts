//The screen which the users sees.
import Holder from "./Holder";
import Panel from "./Panel";
import ButtonArray from "./Button";
import { PointerEventTypes } from "@babylonjs/core";
import { useSelector } from "../../context/useSelector";
import { getActiveScene } from "../../selectors/scenesSelector";


export function algorithme() {
  let count = 0;

  return (buttonArray: ButtonArray) => ++count; 
}

const Screen = (lenght: number) => {
  const scene = useSelector(getActiveScene);
  const btns = new ButtonArray(lenght, algorithme())
  const panel = Panel(btns.buttons);

  scene.onPointerObservable.add((info, event) => {
    switch (info.type) {
      case PointerEventTypes.POINTERDOWN:
        btns.next();
        break
    }
  });

  Holder(panel);
};


export default Screen;