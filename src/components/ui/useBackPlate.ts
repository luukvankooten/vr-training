import { HolographicBackplate } from "@babylonjs/gui";


const createBackPlate = (() => {
  const backPlate = new HolographicBackplate();

  return () => backPlate;
})();

export default function useBackPlate(): HolographicBackplate {
  return createBackPlate();
}