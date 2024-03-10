import { p_types } from "..";
import { py, supported_types } from "../type";

export class Dict implements py {
  // Constructor to initialize the Tuple
  value: Record<string | number, p_types | Dict>;
  type: supported_types = supported_types.dict;
  constructor(elements: Record<string | number, p_types | Dict>) {
    this.value = elements;
  }

  // Method to convert the Tuple into a code string format
  toCodeString(): string {
    return `{${Object.entries(this.value)
      .map(([k, v]) => `${k}:${v.toCodeString()}`)
      .join(",")}}`;
  }

  // Static method for creating a new Tuple instance
  static of(elements: Record<string | number, p_types>): Dict {
    return new Dict(elements);
  }
}
