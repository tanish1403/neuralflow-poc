import { py, supported_types } from "../type";

export class Bool implements py {
  value: boolean = false;
  type: supported_types = supported_types.int;
  constructor(i?: boolean) {
    this.value = i ?? false;
  }
  toCodeString(): string {
    return this.value.toString();
  }
  static of(i?: boolean): Bool {
    return new Bool(i ?? false);
  }
}
