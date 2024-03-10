import { p_types } from "..";
import { py, supported_types } from "../type";

export class Tuple implements py {
  // Constructor to initialize the Tuple
  value: p_types[];
  type: supported_types = supported_types.tuple;
  constructor(...elements: p_types[]) {
    this.value = elements;
  }

  // Method to convert the Tuple into a code string format
  toCodeString(): string {
    const length = this.value.length;

    if (length === 1) {
      // in python a single element tuple should have a trailing comma
      return `(${this.value[0].toCodeString()},)`;
    }
    return `(${this.value.map((v) => v.toCodeString()).join(", ")})`;
  }

  // Static method for creating a new Tuple instance
  static of(...elements: p_types[]): Tuple {
    return new Tuple(...elements);
  }
}
