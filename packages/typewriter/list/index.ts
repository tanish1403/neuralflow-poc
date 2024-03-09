import { p_primitive_types } from "../python_primitive";
import { py, supported_types } from "../type.d";

export class List implements py {
  value: p_primitive_types[];
  type: supported_types = supported_types.list;
  constructor(...elements: p_primitive_types[]) {
    this.value = elements;
  }

  toCodeString(): string {
    return `(${this.value.join(",")})`;
  }

  static of(...elements: p_primitive_types[]): List {
    return new List(...elements);
  }
}
