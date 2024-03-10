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

  getCompiledString(): string {
    return `${this.name}: ${this.value.toCodeString()}`;
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
  /**
   * Input nodes of the layer to whome it is connected to
   */
  input_nodes: Layer[] = [];

  /**
   * Id of the layer
   * id: string;
   * for now neglecting this idea of id, I was thinking to use this as the value in which it will be stored in the py
   * id = batchNormalization_1
   * batchNormalization_1 = BatchNormalization()(input_for_batchNormalization)
   */

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

  /**
   * @compiler
   *
   * @return {*}  { code: string; link: string }
   * @memberof Layer
   */
  compileLayer(): { code: string; link: string } {
    const link = `from tensorflow.keras.layers import ${this.nameTf}`;
    let code = `${this.nameTf}(`;

    this.args.forEach((arg, i) => {
      code += arg.getCompiledString();
      if (i !== this.args.length - 1) {
        code += ", ";
      }
    });

    code += ")";

    return { code, link };
  }
}
