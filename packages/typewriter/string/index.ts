import { py, supported_types } from "../type";

export class Str implements py {
  value: string = "";
  type: supported_types = supported_types.str;
  constructor(s: string) {
    this.value = s;
  }
  toCodeString(): string {
    return `"${this.value}"`;
  }
}
