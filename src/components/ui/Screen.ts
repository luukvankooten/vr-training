import Holder from "./Holder";
import Panel from "./Panel";
import ButtonArray from "./Button";
import { PointerEventTypes } from "@babylonjs/core";
import { useSelector } from "../../context/useSelector";
import { getActiveScene } from "../../selectors/scenesSelector";

const Screen = (lenght: number) => {
  const scene = useSelector(getActiveScene);
  const btns = new ButtonArray(lenght, () => Math.floor(Math.random() * lenght) + 1)
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