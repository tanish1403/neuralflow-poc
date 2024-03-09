export * from "./str";
export * from "./tuple";
export * from "./int";
export * from "./type.d";

import { Tuple } from ".";
import { List } from "./list";
import { p_primitive_types } from "./python_primitive";

export type p_types = p_primitive_types | Tuple | List;
