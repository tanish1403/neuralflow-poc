import { py, supported_types } from "../type.d";

export class Int implements py {
  value: number = 0;
  type: supported_types = supported_types.int;
  constructor(i: number) {
    this.value = i;
  }
  toCodeString(): string {
    return this.value.toString();
  }
}
