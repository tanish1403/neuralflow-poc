import { p_types } from ".";
import { supported_types } from "./support";

export interface py {
  value: unknown;
  type: supported_types;
  toCodeString(): string;
}

export enum supported_types {
  int,
  str,
  float,
  complex,
  bool,
  list,
  tuple,
  range,
  dict,
  frozenset,
  set,
  bytes,
  bytearray,
  memoryview,
  NoneType,
}
