import { Layer } from "../base-layer";
import { Layer as L } from "../types";

export const input: L = new Layer({
  name: "Input",
  nameTf: "Input",
  argNames: [
    "shape",
    "batch_size",
    "name",
    "dtype",
    "sparse",
    "tensor",
    "ragged",
    "type_spec",
  ],
});
