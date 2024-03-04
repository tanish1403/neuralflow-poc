import { Layer } from "../../base-layer";
import { args } from "./activation.config";

export const activation = () =>
  new Layer({
    name: "Activation",
    nameTf: "Activation",
    args,
  });
