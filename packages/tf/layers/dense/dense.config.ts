import { ArgsInstance } from "../..";
export const args: ArgsInstance[] = [
  {
    name: "units",
    isRequired: true,
  },
  {
    name: "activation",
    isRequired: false,
    defaultValue: "None",
  },
  {
    name: "use_bias",
    isRequired: false,
    defaultValue: true,
  },
  {
    name: "kernel_initializer",
    isRequired: false,
    defaultValue: "glorot_uniform",
  },
  {
    name: "bias_initializer",
    isRequired: false,
    defaultValue: "zeros",
  },
  {
    name: "kernel_regularizer",
    isRequired: false,
    defaultValue: "None",
  },
  {
    name: "bias_regularizer",
    isRequired: false,
    defaultValue: "None",
  },
  {
    name: "activity_regularizer",
    isRequired: false,
    defaultValue: "None",
  },
  {
    name: "kernel_constraint",
    isRequired: false,
    defaultValue: "None",
  },
  {
    name: "bias_constraint",
    isRequired: false,
    defaultValue: "None",
  },
];
