import { py, supported_types } from "../type";
export class None implements py {
  value: null;
  type: supported_types = supported_types.noneType;
  constructor() {
    this.value = null;
  }

  toCodeString(): string {
    return "None";
  }

  static of(): None {
    return new None();
  }
}
