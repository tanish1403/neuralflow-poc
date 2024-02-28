import { Layer as L } from "../types";
import { Layer } from "../base-layer";

export const activation: L = new Layer({
  name: "Activation",
  nameTf: "Activation",
  argNames: ["activation"],
});
