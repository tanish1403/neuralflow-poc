import { Layer } from "../../base-layer";
import { args } from "./batch_normalisation.config";

export const batch_normalisation = new Layer({
  name: "Batch Normalisation",
  nameTf: "BatchNormalisation",
  args: args,
});
