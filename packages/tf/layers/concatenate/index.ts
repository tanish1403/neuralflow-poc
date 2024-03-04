import { Layer } from "../../base-layer";
import { args } from "./concatenate.config";

export const concatenate = () =>
  new Layer({
    name: "Concatenate",
    nameTf: "Concatenate",
    args,
  });
