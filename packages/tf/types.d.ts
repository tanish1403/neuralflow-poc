interface Args {
  /**
   * Value of the argument
   */
  value: string;
  /**
   * Method to capitalize the first letter after splitting by "_"
   * @returns {string}
   */
  GetName(): string;
}

export interface Layer {
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
  kwargs: Args[];
}
