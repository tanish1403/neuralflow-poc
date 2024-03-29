import { p_types } from "..";
import { p_primitive_types } from "../python_primitive";
import { py, supported_types } from "../type";

export class List implements py {
  value: p_types[];
  type: supported_types = supported_types.list;
  constructor(...elements: p_types[]) {
    this.value = elements;
  }

  toCodeString(): string {
    return `(${this.value.map((v) => v.toCodeString()).join(", ")})`;
  }

  static of(...elements: p_primitive_types[]): p_types {
    return new List(...elements);
  }
}
