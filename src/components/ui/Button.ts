import { Color3, Color4, EventState, Vector3 } from "@babylonjs/core";
import { HolographicButton, TextBlock, Vector3WithInfo } from "@babylonjs/gui";
import random from "random";
import { createElement } from "./use3Dmanager";
import useBackPlate from "./useBackPlate";

const buttons: HolographicButton[] = [];

const timerTable: number[] = [];

let lastTime = 0;

let current = 0;

const bg = [
  Color3.Black(),
  Color3.Green(),
  Color3.Gray(),
]

function createOnClickObserver(i: number) {
  const backPlate = useBackPlate();

  return (data: Vector3WithInfo, state: EventState) => {
    const click = (new Date()).getTime();

    timerTable.push((new Date(click - lastTime).getMilliseconds()));

    lastTime = click;

    const target = state.target as HolographicButton;

    target.isVisible = false;

    buttons[Math.floor(Math.random() * 144) + 1].isVisible = true;

    if (timerTable.length % 9 === 0) {
      console.table(timerTable);
      backPlate.material.baseColor = Color4.FromColor3(bg[current]);
      ++current;
    }
  }
}

const Text = (index: number) => createElement(TextBlock, {
  name: `button-text-${index}`,
  text: random.integer(1, 9).toString(),
  fontSize: 48,
  color: 'white',
});

const Button = (index: number) => createElement(HolographicButton, {
  name: `button-${index}`,
  position: Vector3.Zero(),
  content: Text(index),
  isVisible: index === 0,
  builder(control) {
    control.pointerEnterAnimation = () => {};
    control.onPointerDownObservable.add(createOnClickObserver(index))
    control.backMaterial.alpha = 0
    control.frontMaterial.alpha = 0
    buttons.push(control);
  }
});


export default Button;