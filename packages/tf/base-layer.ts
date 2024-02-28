class Args {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  // Method to capitalize the first letter after splitting by "_"
  GetName(): string {
    return this.value
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");
  }
}

export class Layer {
  name: string;
  nameTf: string;
  args: Args[];
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
