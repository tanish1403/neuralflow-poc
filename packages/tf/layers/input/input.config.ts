// shape=None,
// batch_size=None,
// name=None,
// dtype=None,
// sparse=None,
// tensor=None,
// ragged=None,

import { Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../../base-layer";

// type_spec=None,
export const args: ArgsInstance[] = [
  {
    name: "shape",
    isRequired: false,
    defaultValue: new Tuple("None", "None"),
  },
  // {
  //   name: "batch_size",
  //   isRequired: false,
  //   defaultValue: "None",
  // },
];
