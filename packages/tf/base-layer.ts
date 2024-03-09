import { p_types } from "../typewriter";

interface ArgsInstanceRequired {
  isRequired: true;
}

interface ArgsInstanceWithDefault {
  defaultValue: p_types;
  isRequired?: false;
}

export type ArgsInstance = {
  name: string;
  type?: p_types;
} & (ArgsInstanceRequired | ArgsInstanceWithDefault);

/**
 * Class representing an argument, constructed with an instance that either requires a defaultValue or marks the argument as required.
 *
 * @export
 * @class Args
 */
export class Args {
  value: p_types;
  name: string;
  defaultValue?: p_types;
  isRequired: boolean;

  /**
   * Creates an instance of Args.
   * @param {ArgsInstance} i - An instance of ArgsInstance, enforcing conditional requirement of defaultValue.
   */
  constructor(i: ArgsInstance) {
    this.name = i.name;
    this.isRequired = i.isRequired ?? false;
    this.defaultValue = (i as ArgsInstanceWithDefault).defaultValue ?? null;
    this.value = this.defaultValue;
  }

  /**
   * Returns a formatted name derived from the value property, with each part capitalized and spaces instead of underscores.
   *
   * @return {string} The formatted name.
   */
  getCaptalisedName(): string {
    return this.name
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");
  }
}
/**
 *
 *A base clas for all layers especially for POC
 * @export
 * @class Layer
 */
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
    args,
  }: {
    name: string;
    nameTf: string;
    args: ArgsInstance[];
  }) {
    this.name = name;
    this.nameTf = nameTf;
    this.args = args.map((a) => new Args(a));
    this.kwargs = [];
  }
}
