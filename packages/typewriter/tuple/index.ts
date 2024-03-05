import { p_primitive_types } from "../python_primitive";

export class Tuple extends Array<p_primitive_types> {
  // Constructor to initialize the Tuple
  constructor(...elements: p_primitive_types[]) {
    super(...elements);
  }

  // Method to convert the Tuple into a code string format
  toCodeString(): string {
    return `(${this.join(",")})`;
  }
}
