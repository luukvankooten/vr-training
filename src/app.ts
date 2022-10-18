
import random from 'random';
import { Color3, Engine, EventState, FreeCamera, MeshBuilder, Plane, Scene, StandardMaterial, Vector3 } from "@babylonjs/core";

import { GUI3DManager, CylinderPanel, HolographicButton, TextBlock, Vector3WithInfo } from "@babylonjs/gui";

import "@babylonjs/inspector";
import "@babylonjs/core/Debug/debugLayer";
import { ContentDisplay3D } from '@babylonjs/gui/3D/controls/contentDisplay3D';

const buttons = [];

function createOnClickObserver(i: number) {
  return (data: Vector3WithInfo, state: EventState) => {
    console.log(i, data, state);
    const target = state.target as HolographicButton;

    target.isVisible = false;

    buttons[i + 1].isVisible = true;
  }
}

function createUI(scene: Scene) {
  const manager = new GUI3DManager(scene);

  const panel = new CylinderPanel("screen");

  const material = new StandardMaterial("color", scene);
  material.alpha = 1;
  material.diffuseColor = Color3.Black();

  console.log(panel.node)

  manager.addControl(panel);
  panel.margin = 0;

  panel.rows = 9;
  panel.columns = 16;

  panel.radius = 20;
  panel.blockLayout = true;



  const nButtons = Array.from(new Array(144), (_, i: number) => {
    const button = new HolographicButton(`button-${i}`);

    panel.addControl(button);

    if (i !== 2) {
      button.isVisible = false
    }

    button.onPointerDownObservable.add(createOnClickObserver(i));

    const text = new TextBlock(`button-text-${i}`, random.integer(1, 9).toString());
    text.fontSize = 42;
    text.color = 'white';
    //TODO: make random
    button.content = text;

    return button;
  });

  buttons.push(...nButtons)

  console.log(buttons)

  panel.blockLayout = false;

  const plane = new ContentDisplay3D();

  panel.addControl(plane)

  return manager;
}

function createScene(canvas: HTMLCanvasElement, engine: Engine) {
  const scene = new Scene(engine);

  const camera = new FreeCamera("mainView", Vector3.Zero());

  camera.attachControl(canvas, true);

  scene.debugLayer.show({ embedMode: true });

  createUI(scene);

  return scene;
}

function createEngine(canvas: HTMLCanvasElement) {
  const engine = new Engine(canvas, true, {
    adaptToDeviceRatio: true
  });

  const scene = createScene(canvas, engine);

  engine.runRenderLoop(() => {
    scene.render();
  })

  return engine;
}

function app() {
  const canvas = document.getElementById('root') as HTMLCanvasElement;
  const engine = createEngine(canvas);


  window.addEventListener("resize", () => {
    engine.resize();
  });

  return canvas;
}



document.body.prepend(app())


