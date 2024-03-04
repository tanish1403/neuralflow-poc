import { ArgsInstance } from "../../base-layer";
// axis=-1,
// momentum=0.99,
// epsilon=0.001,
// center=True,
// scale=True,
// beta_initializer='zeros',
// gamma_initializer='ones',
// moving_mean_initializer='zeros',
// moving_variance_initializer='ones',
// beta_regularizer=None,
// gamma_regularizer=None,
// beta_constraint=None,
// gamma_constraint=None,
// synchronized=False,

export const args: ArgsInstance[] = [
  {
    name: "axis",
    isRequired: false,
    defaultValue: -1,
  },
  {
    name: "momentum",
    isRequired: false,
    defaultValue: 0.99,
  },
  {
    name: "epsilon",
    isRequired: false,
    defaultValue: 0.001,
  },
  {
    name: "center",
    isRequired: false,
    defaultValue: true,
  },
  {
    name: "scale",
    isRequired: false,
    defaultValue: true,
  },
  {
    name: "beta_initializer",
    isRequired: false,
    defaultValue: "zeros",
  },
  {
    name: "gamma_initializer",
    isRequired: false,
    defaultValue: "ones",
  },
  {
    name: "moving_mean_initializer",
    isRequired: false,
    defaultValue: "zeros",
  },
  {
    name: "moving_variance_initializer",
    isRequired: false,
    defaultValue: "ones",
  },
  {
    name: "beta_regularizer",
    isRequired: false,
    defaultValue: null,
  },
  {
    name: "gamma_regularizer",
    isRequired: false,
    defaultValue: null,
  },
  {
    name: "beta_constraint",
    isRequired: false,
    defaultValue: null,
  },
  {
    name: "gamma_constraint",
    isRequired: false,
    defaultValue: null,
  },
  {
    name: "synchronized",
    isRequired: false,
    defaultValue: false,
  },
];
