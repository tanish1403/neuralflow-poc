import { Layer } from "../../base-layer";
import { args } from "./input.config";

export const input = () =>
  new Layer({
    name: "Input",
    nameTf: "Input",
    args,
  });
