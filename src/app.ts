import "@babylonjs/inspector";
import "@babylonjs/core/Debug/debugLayer";

import Screen from './components/ui/Screen';

import store from './appStore';
import { addActiveScene } from "./actions/scenesActions";
import { createScene } from "./context/useScene";

function app() {
  // console.log(store.getState());


  store.subscribe((s) => {
    console.log(s);
  })

  const sceneAction = addActiveScene(createScene());

  console.log(store.getState());

  console.log(sceneAction);

  store.dispatch(sceneAction);

  console.log(store.getState());

  // Screen(144)  
}

document.addEventListener('DOMContentLoaded', app, false);