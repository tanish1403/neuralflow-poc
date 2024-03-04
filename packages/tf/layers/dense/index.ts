import { Layer } from "../../base-layer";
import { args } from "./dense.config";

export const dense = () =>
  new Layer({
    name: "Dense",
    nameTf: "Dense",
    args,
  });
