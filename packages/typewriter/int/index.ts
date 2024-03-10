import { WithStaticOf, py, supported_types } from "../type";

export class Int implements py {
  value: number = 0;
  type: supported_types = supported_types.int;
  constructor(i: number) {
    this.value = i;
  }
  toCodeString(): string {
    return this.value.toString();
  }
  static of(i: number): Int {
    return new Int(i);
  }
}
