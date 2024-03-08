import { Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../../base-layer";

export const args: ArgsInstance[] = [
  {
    name: "shape",
    isRequired: false,
    defaultValue: Tuple.of(2),
  },
];
