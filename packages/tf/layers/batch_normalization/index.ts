import { Layer } from "../base";
import { args } from "./batch_normalization.config";

export const batch_normalization = () =>
  new Layer({
    name: "Dense", // to be shown on our UI
    nameTf: "Dense", // name avaialable in tensorflow
    args,
  });
