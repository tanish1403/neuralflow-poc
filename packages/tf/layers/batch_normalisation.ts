import { Layer } from "../base-layer";
import { Layer as L } from "../types";

export const batch_normalisation: L = new Layer({
  name: "Batch Normalisation",
  nameTf: "BatchNormalisation",
  argNames: [
    "axis",
    "momentum",
    "epsilon",
    "center",
    "scale",
    "beta_initializer",
    "gamma_initializer",
    "moving_mean_initializer",
    "moving_variance_initializer",
    "beta_regularizer",
    "gamma_regularizer",
    "beta_constraint",
    "gamma_constraint",
  ],
});
