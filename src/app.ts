
import random from 'random';
import { Color3, Engine, EventState, FreeCamera, Material, Mesh, MeshBuilder, Plane, Scene, StandardMaterial, TransformNode, Vector3 } from "@babylonjs/core";

import { GUI3DManager, CylinderPanel, HolographicButton, TextBlock, Vector3WithInfo, HolographicBackplate, StackPanel3D, SpherePanel, PlanePanel } from "@babylonjs/gui";

import "@babylonjs/inspector";
import "@babylonjs/core/Debug/debugLayer";
import ZPanel from './ZPanel';
import { features } from 'process';

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

  const panel = new PlanePanel("buttonsPanel");
  manager.addControl(panel);

  panel.position = new Vector3(0, 0, 18)

  panel.margin = 0;
  panel.rows = 9;
  panel.columns = 16;

  const nButtons = Array.from(new Array(144), (_, i: number) => {
    const button = new HolographicButton(`button-${i}`);

    panel.addControl(button);
    button.position = Vector3.Zero();

    if (i !== 0) {
      button.isVisible = false
    }

    button.pointerEnterAnimation = () => {};

    button.onPointerDownObservable.add(createOnClickObserver(i));

    button.backMaterial.alpha = 0
    button.frontMaterial.alpha = 0
    // button.plateMaterial.alpha = 0
    const text = new TextBlock(`button-text-${i}`, random.integer(1, 9).toString());
    text.fontSize = 48;
    text.color = 'white';
    //TODO: make random
    button.content = text;

    return button;
  });

  buttons.push(...nButtons);

  const holder = new PlanePanel();
  manager.addControl(holder);
  holder.linkToTransformNode(panel.node);
  holder.position = Vector3.Zero();
  holder.rows = 1;
  holder.columns = 1;
  holder.scaling = new Vector3(16.25, 9.25);
  holder.position = new Vector3(0, 0, 0.05);

  const background = new HolographicBackplate();
  holder.addControl(background);


  return manager;
}

function createScene(canvas: HTMLCanvasElement, engine: Engine) {
  const scene = new Scene(engine);

  scene.createDefaultCameraOrLight(true, true, true);

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


