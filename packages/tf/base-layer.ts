export class Args {
  /**
   * Value of the argument
   */
  value: string;

  constructor(value: string) {
    this.value = value;
  }
  /**
   * Method to capitalize the first letter after splitting by "_"
   * @returns {string}
   */ GetName(): string {
    return this.value
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");
  }
}

export class Layer {
  /**
   * Name of the layer
   */
  name: string;
  /**
   * Name of the layer in as used by the TensorFlow library
   */
  nameTf: string;
  /**
   * Arguments of the layer
   */
  args: Args[];
  /**
   * Keyword arguments of the layer
   */
  kwargs: any[];

  constructor({
    name,
    nameTf,
    argNames,
  }: {
    name: string;
    nameTf: string;
    argNames: string[];
  }) {
    this.name = name;
    this.nameTf = nameTf;
    this.args = argNames.map((argName) => new Args(argName));
    this.kwargs = [];
  }
}
