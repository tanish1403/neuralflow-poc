import { list, Tuple } from ".";
import { p_primitive_types } from "./python_primitive";

export type p_types = p_primitive_types | Tuple | list;
