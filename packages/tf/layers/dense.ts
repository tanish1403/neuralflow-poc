import { Layer as L } from "../types";
import { Layer } from "../base-layer";

export const dense: L = new Layer({
  name: "Dense",
  nameTf: "Dense",
  argNames: [
    "units",
    "activation",
    "use_bias",
    "kernel_initializer",
    "bias_initializer",
    "kernel_regularizer",
    "bias_regularizer",
    "activity_regularizer",
    "kernel_constraint",
    "bias_constraint",
  ],
});
