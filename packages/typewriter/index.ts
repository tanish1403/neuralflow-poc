export * from "./string";
export * from "./tuple";
export * from "./int";
export * from "./type.d";

import { Tuple } from ".";
import { p_primitive_types } from "./python_primitive";

export type p_types = Tuple | p_primitive_types;
