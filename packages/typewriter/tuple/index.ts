import { p_primitive_types } from "../python_primitive";
import { py, supported_types } from "../type";

export class Tuple implements py {
  // Constructor to initialize the Tuple
  value: p_primitive_types[];
  type: supported_types = supported_types.tuple;
  constructor(...elements: p_primitive_types[]) {
    this.value = elements;
  }

  // Method to convert the Tuple into a code string format
  toCodeString(): string {
    return `(${this.value.join(",")})`;
  }

  // Static method for creating a new Tuple instance
  static of(...elements: p_primitive_types[]): Tuple {
    return new Tuple(...elements);
  }
}
