import { Engine } from "@babylonjs/core";
import useCanvas from "./useCanvas";

const createEngine = (() => {
  const canvas = useCanvas();

  const engine = new Engine(canvas, true, {
    adaptToDeviceRatio: true
  });

  return () => engine;
})()

export default function useEngine(): Engine {
  return createEngine();
}