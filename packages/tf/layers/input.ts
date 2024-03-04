import { Layer } from "../base-layer";

export const input = new Layer({
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
