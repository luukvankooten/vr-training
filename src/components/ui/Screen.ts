import Holder from "./Holder";
import Panel from "./Panel";
import ButtonArray from "./Button";
import useActiveScene from "../../context/useScene";
import { PointerEventTypes } from "@babylonjs/core";

const Screen = (lenght: number) => {
  // const scene = useScene();
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