import { EventState, Vector3 } from "@babylonjs/core";
import { HolographicButton, TextBlock, Vector3WithInfo } from "@babylonjs/gui";
import random from "random";
import { createElement } from "./use3Dmanager";

type Algorithme = (buttonArray: ButtonArray) => number;

const Text = (index: number) => createElement(TextBlock, {
  name: `button-text-${index}`,
  text: random.integer(1, 9).toString(),
  fontSize: 74,
  color: 'white',
  fontFamily: 'arial',
  fontWeight: 'bold',
});

const Button = (index: number) => createElement(HolographicButton, {
  name: `button-${index}`,
  position: Vector3.Zero(),
  content: Text(index),
  isVisible: index === 0,
  builder(control) {
    control.pointerEnterAnimation = () => {};
    control.backMaterial.alpha = 0;
    control.frontMaterial.alpha = 0;
  }
});


export default class ButtonArray {
  private _buttons: HolographicButton[] = [];

  private _active: number = 0;

  private _algo: Algorithme;

  constructor(length: number, algo: Algorithme) {
    this._buttons = Array.from(new Array(length), (_, i: number) => Button(i));
    this._algo = algo;
  }

  get buttons() {
    return this._buttons;
  }

  get active() {
    return this._buttons.at(this._active);
  }

  get algo() {
    return this._algo;
  }

  next() {
    const current = this.active;
    
    if (current === undefined) {
      throw "No current button"
    }

    current.isVisible = false;

    console.log(this);

    //change the active one;
    this._active = this.algo(this);

    const next = this.active;

    if (next === undefined) {
      throw "No active"
    }

    next.isVisible = true; 

    return next;
  }
}

