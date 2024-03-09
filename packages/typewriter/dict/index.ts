import { p_types } from "..";
import { p_primitive_types } from "../python_primitive";
import { WithStaticOf, py, supported_types } from "../type";
import { DictBase } from "./base";

export const Dict: WithStaticOf<py> = DictBase;
