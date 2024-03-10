import { None, Str } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
  {
    name: "units",
    isRequired: true,
  },
  {
    name: "activation",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "use_bias",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "kernel_initializer",
    isRequired: false,
    defaultValue: Str.of("glorot_uniform"),
  },
  {
    name: "bias_initializer",
    isRequired: false,
    defaultValue: Str.of("zeros"),
  },
  {
    name: "kernel_regularizer",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "bias_regularizer",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "activity_regularizer",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "kernel_constraint",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "bias_constraint",
    isRequired: false,
    defaultValue: None.of(),
  },
];
