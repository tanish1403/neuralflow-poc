import { Layer as L } from "../types";
import { Layer } from "../base-layer";

export const concatenate: L = new Layer({
  name: "Concatenate",
  nameTf: "Concatenate",
  argNames: ["inputs", "axis"],
});
