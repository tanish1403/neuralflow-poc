import { Layer } from "../base";
import { args } from "./batch_normalization.config";

export const batch_normalization = () =>
  new Layer({
    name: "Batch Normalization", // to be shown on our UI
    nameTf: "BatchNormalization", // name avaialable in tensorflow
    args,
  });
