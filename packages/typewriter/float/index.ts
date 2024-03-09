import { py, supported_types } from "../type.d";

export class Float implements py {
  value: number = 0;
  type: supported_types = supported_types.float;
  constructor(i: number) {
    this.value = i;
  }
  toCodeString(): string {
    return this.value.toString();
  }
}
