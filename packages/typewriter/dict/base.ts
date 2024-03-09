import { p_types } from "..";
import { py, supported_types } from "../type";

export class DictBase implements py {
  // Constructor to initialize the Tuple
  value: Record<string | number, p_types | DictBase>;
  type: supported_types = supported_types.dict;
  constructor(elements: Record<string | number, p_types | DictBase>) {
    this.value = elements;
  }

  // Method to convert the Tuple into a code string format
  toCodeString(): string {
    return `{${Object.entries(this.value)
      .map(([k, v]) => `${k}:${v.toCodeString()}`)
      .join(",")}}`;
  }

  // Static method for creating a new Tuple instance
  static of(elements: Record<string | number, p_types>): DictBase {
    return new DictBase(elements);
  }
}
