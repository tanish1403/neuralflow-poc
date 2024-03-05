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
    defaultValue: ["2"] as Tuple,
  },
  {
    name: "batch_size",
    isRequired: false,
    defaultValue: "None",
  },
  {
    name: "name",
    isRequired: false,
    defaultValue: "None",
  },
  {
    name: "dtype",
    isRequired: false,
    defaultValue: "None",
  },
  {
    name: "sparse",
    isRequired: false,
    defaultValue: "None",
  },
  {
    name: "tensor",
    isRequired: false,
    defaultValue: "None",
  },
  {
    name: "ragged",
    isRequired: false,
    defaultValue: "None",
  },
  {
    name: "type_spec",
    isRequired: false,
    defaultValue: "None",
  },
];
