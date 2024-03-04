/**
 * Represents an argument instance where isRequired is true, making defaultValue not required.
 *
 * @export
 * @interface ArgsInstanceRequired
 * @property {string} name - The name of the argument.
 * @property {boolean} isRequired - Indicates the argument is required.
 */
interface ArgsInstanceRequired {
  name: string;
  isRequired: true;
}

/**
 * Represents an argument instance with a default value, automatically implying isRequired is false or omitted.
 *
 * @export
 * @interface ArgsInstanceWithDefault
 * @property {string} name - The name of the argument.
 * @property {string | number | null |boolean} defaultValue - The default value of the argument.
 * @property {false} [isRequired] - Optionally indicates the argument is not required.
 */
interface ArgsInstanceWithDefault {
  name: string;
  defaultValue: string | number | null | boolean;
  isRequired?: false;
}

/**
 * Combines ArgsInstanceRequired and ArgsInstanceWithDefault to enforce defaultValue being required when isRequired is false.
 *
 * @export
 * @type ArgsInstance
 */
export type ArgsInstance = ArgsInstanceRequired | ArgsInstanceWithDefault;

/**
 * Class representing an argument, constructed with an instance that either requires a defaultValue or marks the argument as required.
 *
 * @export
 * @class Args
 */
export class Args {
  value: string | number | null | boolean;
  name: string;
  defaultValue?: string | number | null | boolean;
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
  GetCaptalisedName(): string {
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
