import { Int, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
  {
    name: "shape",
    isRequired: false,
    defaultValue: Tuple.of(Int.of(2)),
  },
];
