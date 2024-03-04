import { Layer } from "../..";
import { args } from "./dense.config";

export const dense = new Layer({
  name: "Dense",
  nameTf: "Dense",
  args,
});
